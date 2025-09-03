const brands = [
  { id: 1, name: "Brand 1", icon: "assets/icons/lightbox.svg" },
  { id: 2, name: "Brand 2", icon: "assets/icons/globalbank.svg" },
  { id: 3, name: "Brand 3", icon: "assets/icons/nietzsche.svg" },
  { id: 4, name: "Brand 4", icon: "assets/icons/spherule.svg" },
  { id: 5, name: "Brand 5", icon: "assets/icons/accounty.svg" },
];

const Brands = () => {
  return (
    <div className="flex justify-between my-[141.5px]">
      {brands.map((brand) => (
        <img
          src={brand.icon}
          alt={brand.name}
          //   width={50}
          //   height={50}
          className="brand-icon"
          key={brand.id}
        />
      ))}
    </div>
  );
};

export default Brands;
