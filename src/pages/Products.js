import {
  Autocomplete,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  ListItem,
  ListItemButton,
  TextField,
} from "@mui/material";
import React from "react";
import { Layout } from "../components/Layout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ArrowDropDownCircle } from "@mui/icons-material";
export const Products = () => {
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 10),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 10),
    createData("Eclair", 262, 16.0, 24, 6.0, 10),
    createData("Cupcake", 305, 3.7, 67, 4.3, 10),
    createData("Gingerbread", 356, 16.0, 49, 3.9, 10),
  ];

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    price: Number
  ) {
    return { name, calories, fat, carbs, protein, price };
  }

  return (
    <Layout>
      <div className="">
        <Container className="container" maxWidth="lg">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell colSpan={3}>Products</TableCell>
                  <TableCell colSpan={3} align="right">
                    add
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={6}>
                    <TextField
                      fullWidth
                      label="Search Products"
                      id="fullWidth"
                    />
                  </TableCell>
                </TableRow>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="Label"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="label"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="label"
                        />
                      </FormGroup>
                    </TableCell>
                    <TableCell>Filter2</TableCell>
                    <TableCell>Filter3</TableCell>
                  </TableRow>
                </TableHead>
              </TableHead>
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  <TableCell align="right">Prices&nbsp;($)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    </Layout>
  );
};
