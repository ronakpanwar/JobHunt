import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { CREATE_COMPANY_API } from '../utils/constant'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ListOfCompany = () => {
    const { companies } = useSelector(store => store.company);
   const navigate = useNavigate();
 
    return (
        <div>
            <Table className="w-full">
                <TableCaption>A list of your Companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Array.isArray(companies) && companies.length > 0 ? (
                        companies.map((c) => (
                            <TableRow key={c._id}>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage src={c.logo} alt={`${c.name} logo`} />
                                    </Avatar>
                                </TableCell>
                                <TableCell>{c.name}</TableCell>
                                <TableCell>{/* Date should be dynamic if available */}</TableCell>
                                <TableCell className="text-right">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div className='flex items-center gap-2 w-fit cursor-pointer'>
                                                <Edit2 className='w-4'/>
                                                <span >Edit</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan="4" className="text-center">No Companies</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}

export default ListOfCompany
