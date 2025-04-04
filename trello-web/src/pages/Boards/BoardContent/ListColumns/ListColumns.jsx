import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns({ columns }) {
    return (
        <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
            {/* Sử dụng Box để tạo Scrollbar cho ListColumns */}
            <Box sx={{
                bgcolor: 'inherit',
                width: '100%',
                height: '100%',
                display: 'flex',
                overflowX: 'auto',
                overflowY: 'hidden',

                // Thiết lập khoảng cách (margin) cho Scrollbar ở dưới cùng của Column Content
                '&::-webkit-scrollbar-track': { margin: 2 }
            }}>
                {columns?.map(column => (<Column key={column._id} column={column} />))}

                <Box sx={{
                    minWidth: '200px',
                    maxWidth: '200px',
                    marginX: 2,
                    borderRadius: '6px',
                    height: 'fit-content',
                    bgcolor: '#ffffff3d'
                }}>
                    <Button
                        startIcon={<NoteAddIcon />}
                        sx={{
                            color: 'white',
                            width: '100%',
                            justifyContent: 'flex-start',
                            paddingLeft: 2.5,
                            paddingY: 1
                        }}
                    >
                        Add new Column</Button>
                </Box>
            </Box>
        </SortableContext>
    )
}

export default ListColumns
