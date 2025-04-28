
import React from "react";
import  { useState } from "react";
import Link from "@mui/material/Link";
import '../Style/price.css'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const data = [
  { id: 1, item: "Shirt/T Shirt", steam: 6, wetNormal: 15, wetPremium: 30, dryNormal: 40, dry24h: 80 },
  { id: 2, item: "Pant", steam: 6, wetNormal: 15, wetPremium: 30, dryNormal: 40, dry24h: 80 },
  { id: 3, item: "Suit/Sherwani Full Set", steam: 40, dryNormal: 150, dry24h: 300 },
  { id: 4, item: "Jacket/Overcoat", steam: 20, dryNormal: 80, dry24h: 160 },
  { id: 5, item: "Silk Shirt & Dhoti", steam: 15, dryNormal: 80, dry24h: 160 },
  { id: 6, item: "Jeans", steam: 8, wetNormal: 20, wetPremium: 40, dryNormal: 40, dry24h: 80 },
  { id: 7, item: "Party Wear Girl", steam: 15, wetNormal: 40, wetPremium: 80, dryNormal: 80, dry24h: 160 },
  { id: 8, item: "Frock/Gown", steam: 15, wetNormal: 40, wetPremium: 80, dryNormal: 80, dry24h: 160 },
  { id: 9, item: "Pattu Pavadai 2 pieces", steam: 15, wetNormal: "-", wetPremium: "-", dryNormal: 80, dry24h: 160 },
  { id: 10, item: "Jump Suit", steam: 15, wetNormal: 20, wetPremium: 40, dryNormal: 40, dry24h: 80 },
  { id: 11, item: "Single Piece Baby Dress", steam: 6, wetNormal: 15, wetPremium: 30, dryNormal: 40, dry24h: 80 },
  { id: 12, item: "Two Pieces Baby Dress", steam: 15, wetNormal: 20, wetPremium: 40, dryNormal: 40, dry24h: 80 },
];

const Pricelist = () => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div>
    <div className='pricingdiv'>
    <h1 className='h8div'>Dry Cleaning / Laundry services Price List</h1>
    <h5 className='h9div'>Lorem Ipsum has been the industry's standard dummy text </h5>
  </div>
<div className="linkable">
{["Mens Wear", "Women Wear", "Kids Wear", "Household"].map((item, index) => (
<Link
key={index}
// href="#"
className={activeLink === index ? "active" : ""}
onClick={() => setActiveLink(index)}
>
{item}
</Link>
))}

</div>
    <TableContainer className="tableof" component={Paper} style={{ width:'80%' , marginLeft: 150, padding: 10 }}>
      
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: "#1976d2", color: "white" }}>
            <TableCell style={{ color: "white" }}>S No</TableCell>
            <TableCell style={{ color: "white" }}>Kids Wear</TableCell>
            <TableCell style={{ color: "white" }}>Steam Press</TableCell>
            <TableCell style={{ color: "white" }}>Wet Wash (Normal)</TableCell>
            <TableCell style={{ color: "white" }}>Wet Wash (Premium)</TableCell>
            <TableCell style={{ color: "white" }}>Dry Clean (Normal)</TableCell>
            <TableCell style={{ color: "white" }}>Dry Clean (24h)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.item}</TableCell>
              <TableCell>{row.steam || "-"}</TableCell>
              <TableCell>{row.wetNormal || "-"}</TableCell>
              <TableCell>{row.wetPremium || "-"}</TableCell>
              <TableCell>{row.dryNormal || "-"}</TableCell>
              <TableCell>{row.dry24h || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="body2" align="center" style={{ marginTop: 10, fontStyle: "italic" }}>
        * Kids apparel includes clothing for ages up to 5 years.
      </Typography>
    </TableContainer>
    </div>
  );
};

export default Pricelist;
