

const ReviewCard = ({review}) => {
    return (
        <div className="card  bg-base-100 shadow border mb-6">
            <div className="card-body">
                <p>{review.opinion}</p>
                <div className="card-actions flex items-center">
                    <img src={review.customer_image} className='rounded-full w-14 h-14' />
                    <div>
                        <h2 className='font-medium'>{review.customer_name}</h2>
                        <p className='text-xs'>{review.designation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;