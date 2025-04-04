import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'

function BoardContent({ board }) {
  //? Sử dụng sensors để quản lý sự kiện kéo thả
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  //? Khoảng cách di chuyển tối thiểu để kích hoạt sự kiện kéo thả
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })

  //? Khoảng cách di chuyển tối thiểu để kích hoạt sự kiện kéo thả
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } })

  // const sensors = useSensors(pointerSensor)
  //? Ưu tiên sử dụng mouseSensor và touchSensor để xử lý sự kiện kéo thả trên thiết bị di động
  const sensors = useSensors(mouseSensor, touchSensor)

  //? Sử dụng DndContext để quản lý trạng thái kéo thả
  const [orderedColumns, setOrderedColumns] = useState([])

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (event) => {
    // console.log('handleDragEnd: ', event)
    const { active, over } = event

    // Kiểm tra nếu không tồn tại over(kéo ra ngoài thì return tránh lỗi)
    if (!active || !over)
      return

    if (active.id !== over.id) {
      // Lấy vị trí cũ (từ thằng active)
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id)

      // Lấy vị mới cũ (từ thằng over)
      const newIndex = orderedColumns.findIndex(c => c._id === over.id)

      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)

      //? 2 cái console.log dữ liệu này sau này dùng để xử lý gọi API
      // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
      // console.log('dndOrderedColumns: ', dndOrderedColumns)
      // console.log('dndOrderedColumnsIds: ', dndOrderedColumnsIds)

      //? Cập nhật lại state columns ban đầu sau khi kéo thả
      setOrderedColumns(dndOrderedColumns)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        padding: '10px 0'
      }}>
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  )
}

export default BoardContent
