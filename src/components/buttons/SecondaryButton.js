const SecondaryButton = (props) => {
    const { action, actionPayload } = props;

    return (
        <div className="btn btn__secondary" onClick={() => action(actionPayload.payload)}>
            {props.name}
        </div>
    );
};

export default SecondaryButton;
