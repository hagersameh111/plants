import { useState } from "react";
import Rose from "../assets/Rose.jpg"
import ZZ from '../assets/ZZ.jpg'
import Tomato from "../assets/Tomato.jpg"
import Thyme from "../assets/Thyme.jpg"

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Red Roses", type: "Outdoor plant", price: "$30.00", date: "18 October 2024", stock: "In stock", image: [Rose] },
    { id: 2, name: "ZZ plant", type: "Indoor Plant", price: "$20.00", date: "17 October 2024", stock: "In stock", image: [ZZ] },
    { id: 3, name: "Cherry tomato", type: "Vegetables", price: "$20.00", date: "11 October 2024", stock: "In stock", image: [Tomato] },
    { id: 4, name: "Thyme", type: "Herbs", price: "$22.00", date: "05 October 2024", stock: "In stock", image: [Thyme] },
    { id: 5, name: "Calathea Plant", type: "Indoor Plant", price: "$30.00", date: "05 October 2024", stock: "In stock", image:[Thyme] }
  ]);

  const [wishlistLink] = useState("https://www.example.com");

  const removeItem = (id) => setWishlist(wishlist.filter(item => item.id !== id));

  const copyLink = () => {
    navigator.clipboard.writeText(wishlistLink);
    alert("Wishlist link copied!");
  };

  return (
    <div style={styles.wishlistContainer}>
      <h1 style={styles.heading}>Wishlist</h1>

      <nav style={styles.nav}>
        <a href="/">Home</a> / <span>Wishlist</span>
      </nav>

      <table style={styles.table}>
        <thead>
          <tr style={styles.theadRow}>
            <th style={styles.th}>Product</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Date Added</th>
            <th style={styles.th}>Stock Status</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map(item => (
            <tr key={item.id} style={styles.row}>
              <td style={styles.wishlistItem}>
                <span style={styles.remove} onClick={() => removeItem(item.id)}>✖</span>
                <img src={item.image} alt={item.name} style={styles.image} />
                <div style={styles.productInfo}>
                  <h2 style={styles.productName}>{item.name}</h2>
                  <p style={styles.productType}>{item.type}</p>
                </div>
              </td>
              <td style={styles.text}>{item.price}</td>
              <td style={styles.text}>{item.date}</td>
              <td style={styles.stock}>{item.stock}</td>
              <td>
                <button style={styles.addToCart}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={styles.container}>
        <label htmlFor="wishlist-link">Wishlist Link:</label>
        <input type="text" id="wishlist-link" value={wishlistLink} readOnly style={styles.input} />
        <button style={styles.copyLink} onClick={copyLink}>Copy Link</button>
      </div>

      <div style={styles.container}>
        <span style={styles.clearWishlist} onClick={() => setWishlist([])}>Clear Wishlist</span>
        <button style={styles.addToCart}>Add All to Cart</button>
      </div>
    </div>
  );
};

// **Inline Styles**
const styles = {
  wishlistContainer: {
    backgroundColor: "white",
    padding: "20px",
    margin: "50px auto",
    width: "80%",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    color: "#333",
  },
  nav: {
    marginBottom: "20px",
    fontSize: "16px",
    color: "#666",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  theadRow: {
    backgroundColor: "#f0c108",
    color: "black",
  },
  th: {
    padding: "15px",
    textAlign: "left",
  },
  row: {
    borderBottom: "1px solid #ddd",
  },
  wishlistItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 0",
  },
  remove: {
    fontSize: "20px",
    cursor: "pointer",
    color: "#333",
    marginRight: "10px",
  },
  image: {
    width: "60px",
    height: "60px",
    borderRadius: "10px",
    objectFit: "cover",
  },
  productInfo: {
    flexGrow: "1",
    textAlign: "left",
    marginLeft: "10px",
  },
  productName: {
    fontSize: "16px",
    margin: "0",
    color: "#333",
  },
  productType: {
    fontSize: "14px",
    margin: "5px 0",
    color: "#666",
  },
  text: {
    fontSize: "14px",
    color: "#333",
  },
  stock: {
    fontSize: "14px",
    color: "green",
  },
  addToCart: {
    backgroundColor: "#184d27",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s",
  },
  container: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
  },
  input: {
    border: "1px solid #ccc",
    padding: "8px",
    borderRadius: "5px",
    width: "220px",
    fontSize: "14px",
    textAlign: "left",
  },
  copyLink: {
    backgroundColor: "#184d27",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s",
  },
  clearWishlist: {
    color: "#184d27",
    fontWeight: "600",
    textDecoration: "underline",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Wishlist;
