//? Board Details
import { use, useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'
import { fetchBoardDetailsAPI } from '~/apis/index'

function Board() {
    const [board, setBoard] = useState(null)  

    useEffect(() => {
        // Call API get board details
        const boardID = '68ef6983f72c237870b0b692ai'

        fetchBoardDetailsAPI(boardID).then(board => {
            setBoard(board)
        })
    }, [])

    return (
        <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
            <AppBar />
            <BoardBar board={board} />
            <BoardContent board={board} />
        </Container>
    )
}

export default Board
