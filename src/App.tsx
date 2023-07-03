import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { data } from './Data/sections'
import { Data } from './types/data.type'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

function App() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null)
  const [sort, setSort] = useState<string>('increase')

  const handleExpandedSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index)
  }

  const handleSort = () => {
    setSort(sort === 'increase' ? 'decrease' : 'increase')
  }

  return (
    <div className='container'>
      <div className='p-5'>
        <div className='w-full rounded-lg shadow-lg'>
          <div className='p-5 flex items-center uppercase'>Reports</div>
          <div className='h-[1px] w-full bg-black/30'></div>
          <div className=' w-full flex flex-col'>
            {data.reports &&
              data.reports?.map((report: Data, index: number) => (
                <div className='flex flex-col items-start justify-center py-3' key={index}>
                  <div className='flex gap-3 items-center cursor-pointer w-full px-3'>
                    <IconButton onClick={() => handleExpandedSection(index)} color='primary' aria-label='expand_button'>
                      {expandedSection !== index ? (
                        <KeyboardArrowRightIcon
                          sx={{
                            fontSize: '1.5rem'
                          }}
                        />
                      ) : (
                        <ExpandMoreIcon
                          sx={{
                            fontSize: '1.5rem',
                            color: 'red'
                          }}
                        />
                      )}
                    </IconButton>
                    <div className='uppercase text-[14px]'>
                      {report.section}{' '}
                      <span className='text-sm font-thin text-tertiaryColor mr-2'>({report.lines.length})</span>
                      {expandedSection === index && (
                        <IconButton onClick={() => handleSort()} color='primary' aria-label='expand_button'>
                          {sort === 'increase' ? (
                            <ArrowUpwardIcon
                              sx={{
                                fontSize: '1rem',
                                color: 'green'
                              }}
                            />
                          ) : (
                            <ArrowDownwardIcon
                              sx={{
                                fontSize: '1rem',
                                color: 'red'
                              }}
                            />
                          )}
                        </IconButton>
                      )}
                    </div>
                  </div>
                  {expandedSection === index && (
                    <ul className='flex flex-col px-10 mt-3 w-full gap-3 max-h-[300px] overflow-y-scroll'>
                      {report.lines &&
                        report.lines
                          .sort((a, b) => {
                            if (sort === 'increase') {
                              return a[1].localeCompare(b[1])
                            }
                            return b[1].localeCompare(a[1])
                          })
                          .map((_, index) => (
                            <li
                              className='py-3 items-center cursor-pointer transition-colors hover:bg-tertiaryColor hover:text-white rounded-lg w-full px-4 flex justify-start font-light text-[14px]'
                              key={index}
                            >
                              <a
                                href={`https://igx.biz/${report.lines[index]
                                  .replace('/en', '')
                                  .substring(report.lines[index].indexOf(']') + 3, report.lines[index].length)
                                  .replace(')', '')}`}
                              >
                                {report.lines[index].substring(1, report.lines[index].indexOf('(')).replace(']', '')}
                              </a>
                            </li>
                          ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
