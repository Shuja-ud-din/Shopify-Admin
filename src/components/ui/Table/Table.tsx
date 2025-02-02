import React, { useEffect, useState, ChangeEvent } from 'react';
import './Table.css';
import TableSearchBar from './TableSearchBar';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import { Skeleton } from '@mui/material';

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';

interface TableProps {
  array: any[];
  label?: string[];
  keysToDisplay?: string[];
  filter?: () => JSX.Element;
  customBlocks?: {
    index: number;
    component: (data: any) => JSX.Element | null;
  }[];
  extraColumns?: ((obj: any) => JSX.Element)[];
  setRecord?: (record: any) => void;
  search?: string;
  routes?: string[];
}

const MainTable: React.FC<TableProps> = ({
  array,
  label = [],
  keysToDisplay = [],
  filter,
  customBlocks = [],
  extraColumns = [],
  setRecord,
  search,
  routes = [],
}) => {
  const [searchedData, setSearchedData] = useState<string>('');
  const navigate = useNavigate();
  const [noOfRecordsPerPage, setNoOfRecordsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [recordsPerPage, setRecordsPerPage] = useState<any[]>();
  useEffect(() => {
    setRecordsPerPage(
      array &&
        array.filter((obj) => {
          return (
            searchedData === '' ||
            obj[search!].toLowerCase().includes(searchedData.toLowerCase())
          );
        }),
    );
  }, [searchedData]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * noOfRecordsPerPage;
    const endIndex = startIndex + noOfRecordsPerPage;

    setRecordsPerPage(array && array.slice(startIndex, endIndex));
  }, [array, noOfRecordsPerPage, currentPage]);

  const renderComponent = (index: number, data: any[]) => {
    const temp = data
      .map((block) => {
        return block.index === index ? block : false;
      })
      .filter((item) => item !== false)[0];

    return temp || false;
  };

  return (
    <>
      <div className="flex justify-end items-center mb-4 ">
        {search && (
          <TableSearchBar
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setSearchedData(event.target.value)
            }
          />
        )}
        {filter && filter()}
      </div>
      <div className="">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              {label.map((text, index) => {
                return (
                  <TableHead
                    key={index}
                    className={`
                       ${index === label.length - 1 ? 'text-right pr-9' : ''}
                        `}
                  >
                    {text}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {recordsPerPage ? (
              recordsPerPage.length > 0 ? (
                recordsPerPage.map((obj) => {
                  return (
                    <TableRow
                      key={obj.id}
                      onClick={() => {
                        if (setRecord) setRecord(obj);
                      }}
                      className="cursor-pointer "
                    >
                      {keysToDisplay.map((key, index) => {
                        const blocksList = renderComponent(index, customBlocks);
                        return (
                          <TableCell
                            key={index}
                            onClick={() => {
                              if (routes.length > 0)
                                navigate(`${routes[0]}/${obj.id}`);
                            }}
                            // className={`py-4 font-[400] text-[14px] text-[#858992] text-left pl-9 whitespace-nowrap ${
                            //   index === label.length - 1
                            //     ? 'text-right pr-9'
                            //     : 'text-left pl-9'
                            // }`}
                          >
                            {blocksList
                              ? blocksList.component(key ? obj[key] : obj)
                              : obj[key]}
                          </TableCell>
                        );
                      })}
                      {extraColumns.map((item, index) => {
                        return (
                          <TableCell
                            key={index}
                            className={`py-4 font-[400] text-[14px] text-[#858992] flex justify-end pr-9 whitespace-nowrap`}
                          >
                            {item(obj)}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={label.length}
                    className="px-6 py-4 text-center border-b border-[#F2F2F2]"
                  >
                    No Records Found
                  </TableCell>
                </TableRow>
              )
            ) : (
              <TableRow>
                <TableCell colSpan={label.length} className="px-6 py-4">
                  {label.map((index) => {
                    return <Skeleton key={index} height={50} />;
                  })}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Pagination
          noOfRecordsPerPage={noOfRecordsPerPage}
          setNoOfRecordsPerPage={setNoOfRecordsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          noOfTotalRecords={array?.length || 0}
        />
      </div>
    </>
  );
};

export default MainTable;
