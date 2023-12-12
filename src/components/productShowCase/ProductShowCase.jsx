function ProductShowCase({ children, title }) {
  return (
    <div className="productSliderDivStyle">
      <h3 className="productHeadStyle">{title}</h3>
      {children}
    </div>
  );
}

export default ProductShowCase;
