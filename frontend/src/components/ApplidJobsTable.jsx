import React from 'react'
import PropTypes from 'prop-types'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'


const ApplidJobsTable = props => {
    return (
        <div>
            <Table className="w-full">
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        [1, 2, ].map((e, index) => (
                            <TableRow key={index}>
                                <TableCell>13-08-2024</TableCell>
                                <TableCell>Frontend Devloper</TableCell>
                                <TableCell>Flipcart</TableCell>
                                <TableCell className="text-right"><Badge key={index} className='text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full'>Panding </Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}



export default ApplidJobsTable
