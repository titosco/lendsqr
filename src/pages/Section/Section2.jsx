import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LucideText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Section2 = () => {
  return (
    <div className="p-6 m-4 bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ORGANIZATION</TableHead>
            <TableHead>USERNAME</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>PHONE NUMBER</TableHead>
            <TableHead>DATE JOINED</TableHead>
            <TableHead>STATUS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Lendsqr</TableCell>
            <TableCell>Adedeji</TableCell>
            <TableCell>adedeji@Lendsqr.com</TableCell>
            <TableCell>08037264938</TableCell>
            <TableCell>May 15, 2020 10:00 AM</TableCell>
            <TableCell><Button className='bg-gray-100 text-gray-500 rounded-full'>Inactive</Button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Section2;
