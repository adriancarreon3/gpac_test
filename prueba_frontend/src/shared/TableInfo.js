import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, Paper, TablePagination } from '@material-ui/core';
import { Avatar, Box, Button } from '@material-ui/core';
import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';

const StyledTableCell = withStyles((theme) => ({
    root:{
        color: '#CECECE',
        border: "none",
        boxShadow: "none",
    },
    head: {
        backgroundColor: theme.palette.primary.main,
    },
    body: {
        height: '60px',
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.detail,
    },
}))(TableRow);

export const TableInfo = () => {

    const classes = useStyles();

    const [page, setPage] = useState(0);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const [rowsPerPage, setRowsPerPage] = useState(6);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const { recruits } = useSelector(store => store.recruit);
    recruits.sort((a,b) => a.id_recruit - b.id_recruit);

    return (
        <TableContainer component={Paper} elevation={0} className={classes.container}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Industry</StyledTableCell>
                        <StyledTableCell>Job Position</StyledTableCell>
                        <StyledTableCell>Phone</StyledTableCell>
                        <StyledTableCell align="center">Salary</StyledTableCell>
                        <StyledTableCell align="center">Location</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {(rowsPerPage > 0
                        ? recruits.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : recruits).map((recruit) => (
                        // recruits.map((recruit) => (
                        <StyledTableRow key={recruit.id_recruit} className={classes.rowTable}>
                            <StyledTableCell align="left" className={classes.columnFTable}>
                                <Avatar alt="Avatar" src="./assets/avatars/avatar1.png" className={classes.avatar}/>
                            </StyledTableCell>

                            <StyledTableCell>
                                <Box display="flex" flexDirection="column">
                                    <h3 classes={classes.name}>{recruit.first_name + ' ' + recruit.last_name}</h3>
                                    <span>{recruit.title}</span>
                                </Box>
                            </StyledTableCell>
                            
                            <StyledTableCell>{recruit.industry}</StyledTableCell>
                            <StyledTableCell>{recruit.functional_title}</StyledTableCell>
                            <StyledTableCell>{recruit.phone}</StyledTableCell>
                            <StyledTableCell align="center">${recruit.wish_salary}</StyledTableCell>
                            <StyledTableCell align="center">{recruit.name_location}</StyledTableCell>
                            <StyledTableCell className={classes.columnLTable}>
                                <Button
                                    variant="outlined"
                                    className={classes.button}
                                >
                                    <span>View Profile</span>
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>

                <TableFooter>
                    <TableRow>
                        <TablePagination
                            classes={{
                                toolbar: classes.toolbar,
                                caption: classes.caption,
                                selectIcon: classes.selectIcon,
                            }}    
                            rowsPerPageOptions={[6, 12]}
                            colSpan={8}
                            count={recruits.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>

            </Table>
        </TableContainer>
    )
}

const useStyles = makeStyles((theme) =>({
    avatar: {
        marginTop: -15,
        marginBottom: -15,
        height: theme.spacing(8.5),
        width: theme.spacing(8.5),
        position: 'relative',
        zIndex: 100,
    },
    button: {
        color: 'white',
        textTransform: 'capitalize',
        border: 'solid 1px #CECECE',
        width: '100%'
    },
    columnFTable: {
        borderRadius: '10px 0 0 10px',
        width: '1px',
        background: `linear-gradient(90deg, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.detail} 50%)`,
    },
    columnLTable: {
        borderRadius: '0 10px 10px 0'
    },
    container:{
        backgroundColor: theme.palette.primary.main,
    },
    name:{
        fontSize: '18px !important',
        width: '100%',
        textOverflow: 'ellipsis',
    },
    rowTable:{
        borderBottom: 'solid 10px #24292E',
        borderColor: theme.palette.primary.main,
    },
    table: {
        minWidth: 700,
        overflow: 'hidden',
        marginBottom: theme.spacing(2),
    },
    // FOR PAGINATION
    caption: {
        color: 'white',
    },
    toolbar: {
        color: 'white',
    },
    selectIcon:{
        color:'white'
    },
    paginationSelect:{
        color:'white'
    }
}));

