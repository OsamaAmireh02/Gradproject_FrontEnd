import { Scanner } from '@yudiel/react-qr-scanner';

const ReadQR = () => {
    return (
        <Scanner
            onResult={(text, result) => console.log(text, result)}
            onError={(error) => console.log(error?.message)}
        />

    );
}
export default ReadQR