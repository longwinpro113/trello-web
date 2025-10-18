//? Board Details
import { use, useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
// import { mockData } from '~/apis/mock-data'
import { fetchBoardDetailsAPI } from '~/apis/index'

function Board() {
    const [board, setBoard] = useState(null)  

    useEffect(() => {
        // Call API get board details
        const boardID = '68f2f974dc8f5f0bc9dfaa85'

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
