import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const Section2 = () => {
  return (
    <div className="p-4 m-2 ml-4 bg-white text-sm font-thin">
      <Table>
        <TableHeader className='font-bold'>
          <TableRow>
            <TableHead>ORGANIZATION</TableHead>
            <TableHead>USERNAME</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>PHONE NUMBER</TableHead>
            <TableHead>DATE JOINED</TableHead>
            <TableHead>STATUS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='font-extralight'>
          {/* row1 */}
          <TableRow>
            <TableCell >Lendsqr</TableCell>
            <TableCell>Adedeji</TableCell>
            <TableCell>adedeji@Lendsqr.com</TableCell>
            <TableCell>08037264938</TableCell>
            <TableCell>May 15, 2020 10:00 AM</TableCell>
            <TableCell><Button className='bg-gray-100 text-gray-500 rounded-full'>Inactive</Button></TableCell>
          </TableRow>
          {/* row2 */}
          <TableRow>
            <TableCell>Ironro</TableCell>
            <TableCell>Dabbi Ogana</TableCell>
            <TableCell>dabbi2@Lendsqr.com</TableCell>
            <TableCell>08094036239</TableCell>
            <TableCell>April 12, 2020 10:00 AM</TableCell>
            <TableCell><Button className='bg-yellow-100 text-yellow-500 rounded-full'>Pending</Button></TableCell>
          </TableRow>
          {/* row3 */}
          <TableRow>
            <TableCell>Lendstar</TableCell>
            <TableCell>Grace Effon</TableCell>
            <TableCell>grace@Lendsqr.com</TableCell>
            <TableCell>08085947362</TableCell>
            <TableCell>Aprile 02, 2020 10:00 AM</TableCell>
            <TableCell><Button className='bg-red-100 text-red-500 rounded-full'>Blacklisted</Button></TableCell>
          </TableRow>
          {/* row4 */}
          <TableRow>
            <TableCell>Lendsqr</TableCell>
            <TableCell>Tosin Dokunmi</TableCell>
            <TableCell>tosin@Lendsqr.com</TableCell>
            <TableCell>08092736405</TableCell>
            <TableCell>May 30, 2020 10:00 AM</TableCell>
            <TableCell><Button className='bg-yellow-100 text-yellow-500 rounded-full'>Pending</Button></TableCell>
          </TableRow>
          {/* row5 */}
          <TableRow>
            <TableCell>Lendstar</TableCell>
            <TableCell>Grace Effon</TableCell>
            <TableCell>grace@Lendsqr.com</TableCell>
            <TableCell>080102936475</TableCell>
            <TableCell>April 11, 2020 10:00 AM</TableCell>
            <TableCell><Button className='bg-green-100 text-green-500 rounded-full'>Active</Button></TableCell>
          </TableRow>
          {/* row6 */}
          <TableRow>
            <TableCell>Lendsqr</TableCell>
            <TableCell>Tosin Dokunmi</TableCell>
            <TableCell>tosin@Lendsqr.com</TableCell>
            <TableCell>08064759382</TableCell>
            <TableCell>May 29, 2020 10:00 AM</TableCell>
            <TableCell><Button className='bg-green-100 text-green-500 rounded-full'>Active</Button></TableCell>
          </TableRow>
          {/* row7 */}
          <TableRow>
            <TableCell>Lendstar</TableCell>
            <TableCell>Grace Effoni</TableCell>
            <TableCell>grace@Lendsqr.com</TableCell>
            <TableCell>08054730182</TableCell>
            <TableCell>April 03, 2020 10:00 AM</TableCell>
            <TableCell><Button className='bg-red-100 text-red-500 rounded-full'>Blacklisted</Button></TableCell>
          </TableRow>
          {/* row8 */}
          <TableRow>
            <TableCell>Lendsqr</TableCell>
            <TableCell>Tosin Dokunmi</TableCell>
            <TableCell>tosin@Lendsqr.com</TableCell>
            <TableCell>08054926574</TableCell>
            <TableCell>April 17, 2020 10:00 AM</TableCell>
            <TableCell><Button className='bg-gray-100 text-gray-500 rounded-full'>Inactive</Button></TableCell>
          </TableRow>
          {/* row9 */}
          <TableRow>
            <TableCell>Lendstar</TableCell>
            <TableCell>Grace Effion</TableCell>
            <TableCell>grace@Lendsqr.com</TableCell>
            <TableCell>08012393045</TableCell>
            <TableCell>May 10, 2020 10:00 AM</TableCell>
            <TableCell><Button className='bg-gray-100 text-gray-500 rounded-full'>Inactive</Button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Section2;
