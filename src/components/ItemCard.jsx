/* eslint-disable react/prop-types */
import Button1 from "./button1";

const ItemCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div>
      <div>
        <div className="card  rounded-none">
          <figure>
            <img src={image} alt="Shoes" className="w-full h-80" />
            <p className={price ? "absolute top-2 right-2 bg-[#111827] px-4 py-2 text-white" : "hidden"}>{price}</p>
          </figure>
          <div className="card-body items-center text-center bg-[#F3F3F3] space-y-3">
            <h2 className="card-name">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-end">
              <Button1 name={"ADD TO CART"}></Button1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
