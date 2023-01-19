import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LinearProgress from '@mui/material/LinearProgress';
import SquareIcon from '@mui/icons-material/Square';


function Main(){
return(
  <>
    <Box className="box" sx={{
        marginLeft: "270px",
      }}>
          <div style={{display:"flex",flexWrap:"wrap",gap:"20px"}}>
          <Paper className="paper" sx={{padding:"15px",display:"flex",justifyContent:"space-between",flexWrap:"wrap",width:"45%"}} elevation={3}>
            <div>
              <Typography variant="h5">BUDGET</Typography>
              <Typography sx={{display:"flex",alignItems:"center"}} variant="body1">$24000 <ArrowDropDownIcon sx={{color:"red"}} fontSize="large"/><span style={{color:"red"}}>12%</span></Typography>
            </div>
            <div className="budget-img">
              <img src="budget.jpg" />
            </div>
          </Paper>

          <Paper className="paper" sx={{padding:"15px",display:"flex",width:"45%",justifyContent:"space-between",flexWrap:"wrap"}} elevation={3}>
            <div>
              <Typography variant="h5">TOTAL USERS</Typography>
              <Typography sx={{display:"flex",alignItems:"center"}} variant="body1">1600 <ArrowDropDownIcon sx={{color:"green"}} fontSize="large"/><span style={{color:"green"}}>16%</span></Typography>
            </div>
            <div className="budget-img">
              <img src="budget.jpg" />
            </div>
          </Paper>
          </div>

        <div style={{display:"flex",flexWrap:"wrap",gap:"20px",marginTop:"25px"}}>
        <Paper className="paper" sx={{marginTop:"30px",padding:"15px",display:"flex",width:"45%",justifyContent:"space-between",flexWrap:"wrap"}} elevation={3}>
            <div>
              <Typography variant="h5">PROGRESS</Typography>
              <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"20px"}}>
                <Typography variant="h5">75.5%</Typography>
                <LinearProgress className="progress" sx={{width:"100px"}} variant='determinate' value={75.5} />
              </div>
            </div>
            <div className="progress-img">
              <img src="progress.png" />
            </div>
          </Paper>
          
          <Paper className="paper" sx={{marginTop:"30px",padding:"15px",display:"flex",width:"45%",justifyContent:"space-between",flexWrap:"wrap"}} elevation={3}>
            <div>
              <Typography variant="h5">TOTAL PROFIT</Typography>
              <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"20px"}}>
                <Typography variant="h5">$23,200</Typography>
              </div>
            </div>
            <div className="progress-img">
              <img src="progress.png" />
            </div>
          </Paper>
        </div>
      </Box>
      <Box className="box" sx={{marginLeft: "270px",marginTop:"30px"}}>
        <div style={{display:"flex",flexWrap:"wrap",gap:"30px"}}>
        <Paper sx={{padding:"15px"}} elevation={3}>
          <div style={{display:"flex",justifyContent:'space-between'}}>
          <div className="chart-text">
            <Typography variant="h5">12.370</Typography>
            <Typography variant="body1">total sales</Typography>
          </div>
          <div>
            <div style={{display:"flex",flexWrap:"wrap"}}>
            <SquareIcon sx={{color:"#006BE0"}} />
            <Typography>This Year</Typography>
            </div>
            <div style={{display:"flex"}}>
            <SquareIcon sx={{color:"#E4E8EB"}} />
            <Typography>Last Year</Typography>
            </div>
          </div>
          </div>
          <img style={{width:"50%",paddingTop:"25px"}} src="chart.png" />
        </Paper>
        <Paper sx={{padding:"15px"}}>
            <Typography variant="h5">UserData</Typography>
            <img style={{width:"100%"}} src="roundchart.png" />
        </Paper>
        </div>
      </Box>
  </>
)
}

export default Main;