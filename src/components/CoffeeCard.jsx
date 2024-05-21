const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-[192px] h-[240px]" src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between items-center w-full p-5">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-4">
              <button className="btn join-item">view</button>
              <button className="btn join-item">Edit</button>
              <button className="btn join-item">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
