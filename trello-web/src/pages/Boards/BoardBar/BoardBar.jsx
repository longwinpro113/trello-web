import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': { color: 'white' },
  '&:hover': { bgcolor: 'primary.50' }
}

function boardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      
      '&::-webkit-scrollbar-track': {
        margin: 2
      }
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="LongNguyen MERN Stack"
          clickable // onClick={() => {}}
        />

        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable // onClick={() => {}}
        />

        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable // onClick={() => {}}
        />

        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable // onClick={() => {}}
        />

        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable // onClick={() => {}}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>

        <AvatarGroup
          max={6}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title='Long Nguyen'>
            <Avatar
              alt="Long Nguyen"
              src="https://cdn.discordapp.com/avatars/820696454678315090/4e3000407dffe24404a326f46ecb2ac5.webp?size=160"
            />
          </Tooltip>

          <Tooltip title='Aaron Fisher'>
            <Avatar
              alt="Hunter Reeves"
              src="https://i.pinimg.com/736x/de/5a/f3/de5af380b168d9825765c08cf5f0739a.jpg"
            />
          </Tooltip>

          <Tooltip title='Janie Walsh'>
            <Avatar
              alt="Maurice Wade"
              src="https://i.pinimg.com/474x/e2/d4/a1/e2d4a1924b2e3e0044ee09cb5f94e33d.jpg"
            />
          </Tooltip>

          <Tooltip title='Bessie Weber'>
            <Avatar
              alt="Polly Ray"
              src="https://i.pinimg.com/474x/84/0d/da/840dda9ca3e51148415fc54a9724991d.jpg"
            />
          </Tooltip>

          <Tooltip title='Estelle Palmer'>
            <Avatar
              alt="Craig Montgomery"
              src="https://i.pinimg.com/474x/bb/87/18/bb87180897cb4cb694cd692966a0ab15.jpg"
            />
          </Tooltip>

          <Tooltip title='Alice Cannon'>
            <Avatar
              alt="Joel Bowers"
              src="https://i.pinimg.com/474x/88/48/06/884806a3ae2cf6355c2b8862349064e6.jpg"
            />
          </Tooltip>

          <Tooltip title='Ida Owens'>
            <Avatar
              alt="Chester Luna"
              src="https://i.pinimg.com/474x/fd/37/35/fd373555b828325377219b09d975ecf3.jpg"
            />
          </Tooltip>

          <Tooltip title='Verna Hines'>
            <Avatar
              alt="Rhoda Elliott"
              src="https://i.pinimg.com/474x/4a/f4/a8/4af4a8ce36e051bae34590783cbf1561.jpg"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default boardBar
