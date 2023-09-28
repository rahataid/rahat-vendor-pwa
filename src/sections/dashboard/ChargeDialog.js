import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Card,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ChargeDialog = ({
  fetchingChainData = true,
  open = false,
  disabled = true,
  loading = false,
  footer,
  handleModal = () => {},
  handleQRScanner = (result, error) => {},
  // inputValue = '',
  // handleInput = (e) => {},
  // inputValueQr = '',
  // handleInputQr = (e) => {},
  handleSubmit = () => {},
  handleSubmitQr = () => {},
}) => {
  const [inputPhone, setInputPhone] = useState('');
  const [inputQr, setInputQr] = useState('');
  const [useQrCode, setUseQrCode] = useState(false);

  const handleInput = (e) => {
    setInputPhone(e.target.value);
  };

  const handleInputQr = (e) => {
    setInputQr(e.target.value);
  };

  const PhoneComponent = (
    <DialogContent>
      <DialogContentText>
        You are about to send tokens to this beneficiary. Please enter phone number of the beneficiary.
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="walletAddress"
        label="Beneficiary Phone Number"
        fullWidth
        variant="standard"
        value={inputPhone}
        onChange={handleInput}
      />
    </DialogContent>
  );

  const QRComponent = (
    <DialogContent>
      <DialogContentText>
        You are about to send tokens to this beneficiary. Please enter the QR code of the beneficiary.
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="walletAddress2"
        label="Beneficiary QR Code"
        fullWidth
        variant="standard"
        value={inputQr}
        onChange={handleInputQr}
      />
      {/* <QRCode inputValue={inputValueQr} handleInput={handleInputQr} /> */}
      {/* <QRScanner loading={loading} onResult={handleQRScanner} scanData={inputValue} /> */}
    </DialogContent>
  );

  return (
    <Box>
      <Card>
        <LoadingButton
          disabled={disabled}
          loading={fetchingChainData}
          loadingIndicator="Loading..."
          // loadingPosition="start"
          variant="contained"
          fullWidth
          onClick={handleModal}
        >
          <span>Charge Beneficiary</span>
        </LoadingButton>
        <CardActions>{footer}</CardActions>
      </Card>
      <Dialog fullScreen fullWidth open={open} onClose={handleModal}>
        <DialogTitle>Charge Beneficiary</DialogTitle>
        {useQrCode && QRComponent}

        {!useQrCode && PhoneComponent}

        <DialogActions>
          <Button onClick={() => setUseQrCode((prev) => !prev)}>
            {useQrCode ? 'Enter Phone Number' : 'Use QR Code'}
          </Button>
          <Button variant="outlined" onClick={handleModal}>
            Cancel
          </Button>
          {useQrCode ? (
            <LoadingButton
              disabled={!inputQr}
              loading={loading}
              variant={'contained'}
              onClick={() => handleSubmitQr(inputQr)}
            >
              Charge QR
            </LoadingButton>
          ) : (
            <LoadingButton
              disabled={!inputPhone}
              loading={loading}
              variant={'contained'}
              onClick={() => handleSubmit(inputPhone)}
            >
              Charge PHONE
            </LoadingButton>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

ChargeDialog.propTypes = {
  fetchingChainData: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  footer: PropTypes.node,
  handleQRScanner: PropTypes.func.isRequired,
  inputValueQr: PropTypes.string.isRequired,
  handleInputQr: PropTypes.func.isRequired,
  handleSubmitQr: PropTypes.func.isRequired,
};

export default ChargeDialog;