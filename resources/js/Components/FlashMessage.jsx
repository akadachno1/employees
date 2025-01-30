const FlashMessage = ({ message }) => {
    if(!FlashMessage && !FlashMessage.error) {
        return null;
    }
    <div
        className={`${
            FlashMessage.isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        } md-4 rounded border p-4`}
        >
            <p>{flash.success || flash.error}</p>

    </div>
}

export default FlashMessage;
