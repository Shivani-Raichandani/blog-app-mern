import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from "@mui/material"

import { Link, useSearchParams } from "react-router-dom";

import { categories } from "../../constants/data";

const StyledTable = styled(Table)`
    border-right: 1px solid #cfd9d6;
`;

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #9bd3cb;
    color: #445045;
    height: 50px;

    &:hover {
        background: #445045;
        color: #fff;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #435243;
`

const Categories = () => {

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    return(
        <>
            <StyledLink to={`/create?category=${category || ''}`}>
                <StyledButton>Create Blog</StyledButton>
            </StyledLink>
             
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <StyledLink to='/'>
                                All Categories
                            </StyledLink>
                        </TableCell>

                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>
                                    <StyledLink to={`/?category=${category.type}`}>
                                        {category.type}
                                    </StyledLink>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </>
    )
}

export default Categories;