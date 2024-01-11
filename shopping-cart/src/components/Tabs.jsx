import arrowImg from "../assets/arrow.svg";
export default function Tabs({
  renderLink,
  isWomenDropdownVisible,
  setWomenDropdownVisibility,
}) {
  return (
    <>
      <div className="tabs">
        <div id="tab-container">
          {renderLink("/shop-all", "Shop All", "Explore all products")}
          {renderLink("/mens-clothing", "Men", "Explore all products")}

          <div
            className={`women-container ${
              isWomenDropdownVisible ? "visible" : ""
            }`}
            onMouseEnter={() => setWomenDropdownVisibility(true)}
            onMouseLeave={() => setWomenDropdownVisibility(false)}
            onClick={() => setWomenDropdownVisibility(!isWomenDropdownVisible)}
          >
            <div id="women-tab">
              Women
              <img className="arrow-img" src={arrowImg} alt="arrow" />
            </div>

            <div className="dropdown-container">
              {renderLink("/women", "All Women")}
              {renderLink("/women/womens-clothing", "Women Clothing")}
              {renderLink("/women/jewelery", "Jewelery")}
            </div>
          </div>
          {renderLink("/electronics", "Electronics")}
        </div>
      </div>
    </>
  );
}
