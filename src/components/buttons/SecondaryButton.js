const SecondaryButton = (props) => {
    const { action, actionPayload } = props;

    return (
        <div className="btn btn__secondary" onClick={() => action(actionPayload.productID)}>
            {props.name}
        </div>
    );
};

export default SecondaryButton;
