
import React from "react";

const Contactmap = () => {
  return (
    <div style={styles.container}>
      <h2>New York City Map</h2>
      <iframe
        title="New York City Map"
        style={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24117.583199749933!2d-74.006015!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMzYuMCJX!5e0!3m2!1sen!2sus!4v1634890525212!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  map: {
    width: "90%",
    height: "500px",
    border: "0",
  },
};

export default Contactmap;
