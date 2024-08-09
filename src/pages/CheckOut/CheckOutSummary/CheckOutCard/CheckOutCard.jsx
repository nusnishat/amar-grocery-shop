

const CheckOutCard = ({cartProduct}) => {
    const { title, price, quantity, imagePath } = cartProduct;
    console.log(title)
    return (
        <div className="flex bg-gray-50 m-4 p-4 rounded-lg border">
            <div>
                <img className="rounded-lg w-16" src={imagePath} alt="" />
            </div>
            <div className="ms-4 text-sm">
                <p className="font-semibold">{title}</p>
                <p>Price : {price}</p>
                <p>Quantity : {quantity}</p>
            </div>
        </div>
    );
};

export default CheckOutCard;