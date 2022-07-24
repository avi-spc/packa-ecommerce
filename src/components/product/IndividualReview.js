const IndividualReview = () => {
    return (
        <div className="individual-review">
            <div className="individual-review__customer-image">
                <img src="" alt="" />
            </div>
            <div className="individual-review__details">
                <div className="secondary-heading">Avdhesh Yadav</div>
                <div className="individual-review__rating rating-bar rating-bar__small">
                    <span className="material-symbols-outlined positive">circle</span>
                    <span className="material-symbols-outlined positive">circle</span>
                    <span className="material-symbols-outlined positive">circle</span>
                    <span className="material-symbols-outlined negative">circle</span>
                    <span className="material-symbols-outlined negative">circle</span>
                </div>
                <div className="individual-review__date">Jun 22, 2022</div>
                <p className="individual-review__content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta corrupti rerum repellat accusamus aspernatur neque ex laborum, quisquam expedita labore minima necessitatibus ipsam ipsum alias molestias vitae blanditiis odio eos.</p>
            </div>
        </div>
    );
}
 
export default IndividualReview;