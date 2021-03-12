import React from 'react'
import styles from "./Booking.module.css"
import DatePicker from './Datepicker'

import { BTimePicker } from './BTimePicker'

const initialData = {
    name: "Ranjth",
    mobile: "",
    email: "",
    special: ""
}

export const Booking = () => {
    // const [month, setMonth] = React.useState("")
    // const [day, setDay] = React.useState("")
    const [date, setDate] = React.useState("")
    // const [year, setYear] = React.useState("")
    const [guestCount, setGuestCount] = React.useState(0)
    const [visitor, setVisitor] = React.useState(initialData)

    const selectedDay = (val) => {
        // console.log(val)
        let date = val.toString().split(" ")
        console.log(date)
        // setMonth(date[1])
        // setYear(date[3])
        setDate(`${date[0]}, ${date[2]} ${date[1]} ${date[3]}`)
        // setDay(date[0])
    }
    console.log(date)

    const handleVisitorCount = (operation) => {
        console.log(operation)
        if (operation === "+") {
            setGuestCount(guestCount + 1)
        }
        if (operation === "-") {
            if (guestCount > 0) {
                setGuestCount(guestCount - 1)
            }
        }
    }

    const visitorData = (e) => {
        let { name, value } = e.target
        setVisitor({ ...visitor, [name]: value })
    }
    return (
        <div className={styles.container}>
            <div className={styles.container_head}>
                Select an Offer or Deal
            </div>
            <div className={styles.content_head}>
                <div className={styles.calender_block}>
                    <p>Select Date</p>
                    <div className={styles.calender_block_head}>
                        {/* <div className={styles.month_name}>
                            <div className={styles.month}>{month}</div>
                            <img src="https://st1.dineout-cdn.co.in/images/uploads/misc/2020/Feb/14/calendar-img.png" alt="calender-logo" width='30px' />
                        </div> */}
                        <div className={styles.calender_block}>
                            <DatePicker getSelectedDay={selectedDay} />
                        </div>
                    </div>
                </div>
                <div className={styles.time_head}>
                    <p>Time</p>
                    <p>Choose an available time slot</p>
                </div>
                <div className={styles.slots_header}>
                    <BTimePicker />
                </div>
                <div className={styles.guest_details}>
                    <p>Select Guest/s</p>
                    <p>Choose the number of going to guests going</p>
                    <div className={styles.guest_details_head}>
                        <div className={styles.guest_details_label}>
                            Guests:
                        </div>
                        <br />
                        <div className={styles.guest_details_count}>
                            <div symbol="-" onClick={() => handleVisitorCount("-")} className={styles.visitorCountOperation}>-</div>
                            <div className={styles.visitorsCount}>
                                {guestCount}
                            </div>
                            <div symbol="+" onClick={() => handleVisitorCount("+")} className={styles.visitorCountOperation}>+</div>
                        </div>
                    </div>
                    <p>Enter Guest Details</p>
                    <div className={styles.guest_details_input}>
                        <input type="text" placeholder="Name" name="name" value={visitor.name} onChange={visitorData} />
                        <input type="text" placeholder="Mobile Number" name="mobile" value={visitor.mobile} onClick={visitorData} />
                        <input type="text" placeholder="Email Address (Optional)" name="email" value={visitor.email} onClick={visitorData} />
                        <input type="text" placeholder="Special Request (Optional)" name="special" value={visitor.special} onClick={visitorData} />
                        {guestCount > 0 && <button className={styles.data_collection}>Continue</button>}
                    </div>
                    {/* <div></div> */}
                </div>
            </div>
        </div >
    )
}

// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import moment from "moment";
// import Button from '@material-ui/core/Button';
// // import { getBookedSlots, bookSlot } from "../../utils";
// import styles from "./Booking.module.css"
// import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
// import FlareOutlinedIcon from '@material-ui/icons/FlareOutlined';
// import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
// import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
// import { Divider } from '@material-ui/core';
// import Brightness3Icon from '@material-ui/icons/Brightness3';
// import WbSunnyIcon from '@material-ui/icons/WbSunny';
// import { useHistory } from "react-router-dom";



// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`scrollable-auto-tabpanel-${index}`}
//             aria-labelledby={`scrollable-auto-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box p={3}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `scrollable-auto-tab-${index}`,
//         'aria-controls': `scrollable-auto-tabpanel-${index}`,
//     };
// }

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         width: '80%',
//         margin: "auto"
//     },
//     slotsCont: {
//         display: "flex",
//         flexWrap: "wrap",
//     },
//     icon: {
//         color: "#414146"
//     },
//     slotItem: {
//         margin: "0.5em"
//     }
// }));

// const Booking = ({ doctors_id }) => {
//     const history = useHistory();
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);
//     const [date, setDate] = React.useState(moment().format());
//     const [bookedSlots, setBookedSlots] = React.useState([]);
//     const slotArray = [
//         {
//             time: "9:30",
//             timeStr: "09:30",
//             type: 0
//         },
//         {
//             time: "10:00",
//             timeStr: "10:00",
//             type: 0
//         },
//         {
//             time: "10:30",
//             timeStr: "10:30",
//             type: 0
//         },
//         {
//             time: "11:30",
//             timeStr: "11:30",
//             type: 0
//         },
//         {
//             time: "12:00",
//             timeStr: "12:00",
//             type: 1
//         },
//         {
//             time: "12:30",
//             timeStr: "12:30",
//             type: 1
//         },
//         {
//             time: "1:00",
//             timeStr: "13:00",
//             type: 1
//         },
//         {
//             time: "1:30",
//             timeStr: "13:30",
//             type: 1
//         },
//         {
//             time: "16:00",
//             timeStr: "4:00",
//             type: 2
//         },
//         {
//             time: "16:30",
//             timeStr: "4:30",
//             type: 2
//         },
//         {
//             time: "17:00",
//             timeStr: "5:00",
//             type: 2
//         },
//         {
//             time: "17:30",
//             timeStr: "5:30",
//             type: 2
//         },
//         {
//             time: "18:00",
//             timeStr: "6:00",

//             type: 2
//         },
//         {
//             time: "18:30",
//             timeStr: "6:30",
//             type: 2
//         },
//         {
//             time: "19:00",
//             timeStr: "7:00",
//             type: 2
//         },
//         {
//             time: "20:00",
//             timeStr: "8:00",
//             type: 3
//         },
//         {
//             time: "20:30",
//             timeStr: "8:30",
//             type: 3
//         }
//     ]
//     const [slots, setSlots] = React.useState([...slotArray]);
//     const [allSlots, setAllSlots] = React.useState([]);
//     const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//     const handleBookedSlots = (data, newValue) => {
//         const dateStr = moment().day(newValue + 3).format();
//         let slots = [];
//         data.map(item => {
//             return item.time.substring(0, 11) === dateStr.substring(0, 11) ? slots.push(item.time.substring(11, 16)) : null
//         })
//         setBookedSlots(slots);
//     }

//     // React.useState(() => {
//     //     getBookedSlots(doctors_id)
//     //         .then(res => {
//     //             setAllSlots(res.data.data);
//     //             handleBookedSlots(res.data.data)
//     //         })
//     // }, [])

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//         setDate(moment().day(newValue + 3).format());
//         handleBookedSlots(allSlots, newValue);
//     };

//     const handleBookSlot = (time) => {
//         const dateTimeStr = date.substring(0, 11) + time + ":00+05:30"
//         // const postObj = {
//         //   doctor_id : doctors_id,
//         //   name : "John Doe",
//         //   contact : "8425028144",
//         //   time : dateTimeStr
//         // }
//         // bookSlot(postObj)
//         history.push(`/appointment/${doctors_id}/${dateTimeStr}`)

//     }

//     return (
//         <div className={classes.root}>
//             <AppBar position="static" color="transparent">
//                 <Tabs
//                     value={value}
//                     onChange={handleChange}
//                     indicatorColor="primary"
//                     textColor="primary"
//                     variant="scrollable"
//                     scrollButtons="auto"
//                     aria-label="scrollable auto tabs example"
//                 >
//                     <Tab label="Today" {...a11yProps(0)} />
//                     <Tab label="Tomorrow" {...a11yProps(1)} />
//                     <Tab label={moment().day(5).format('ddd, MMM Do')} {...a11yProps(2)} />
//                     <Tab label={moment().day(6).format('ddd, MMM Do')} {...a11yProps(3)} />
//                     <Tab label={moment().day(7).format('ddd, MMM Do')} {...a11yProps(4)} />
//                     <Tab label={moment().day(8).format('ddd, MMM Do')} {...a11yProps(5)} />
//                     <Tab label={moment().day(9).format('ddd, MMM Do')} {...a11yProps(6)} />
//                     <Tab label={moment().day(10).format('ddd, MMM Do')} {...a11yProps(7)} />
//                     <Tab label={moment().day(11).format('ddd, MMM Do')} {...a11yProps(8)} />
//                     <Tab label={moment().day(12).format('ddd, MMM Do')} {...a11yProps(9)} />
//                     <Tab label={moment().day(13).format('ddd, MMM Do')} {...a11yProps(10)} />
//                     <Tab label={moment().day(14).format('ddd, MMM Do')} {...a11yProps(11)} />
//                     <Tab label={moment().day(15).format('ddd, MMM Do')} {...a11yProps(12)} />
//                     <Tab label={moment().day(16).format('ddd, MMM Do')} {...a11yProps(13)} />
//                     <Tab label={moment().day(17).format('ddd, MMM Do')} {...a11yProps(14)} />
//                     <Tab label={moment().day(18).format('ddd, MMM Do')} {...a11yProps(15)} />
//                 </Tabs>
//             </AppBar>
//             {
//                 arr.map(item => (
//                     <TabPanel value={value} index={item} className={classes.tabPanel} key={item}>
//                         <Box className={classes.slotsCont}>
//                             <div className={styles.slotsCont_time}>
//                                 <WbSunnyOutlinedIcon className={styles.icon} color="action" />
//                                 <p>Morning</p>
//                             </div>
//                             <div className={styles.slotsCont_slots}>
//                                 {
//                                     slots.map(item => (
//                                         item.type === 0 && !bookedSlots.includes(item.time) && <Button variant="outlined" className={classes.slotItem} key={item.time} value={item.time} color="primary" onClick={(e) => handleBookSlot(e.target.value)}>{item.timeStr}</Button>
//                                     ))
//                                 }
//                             </div>
//                         </Box>
//                         <Divider />
//                         <Box className={classes.slotsCont}>
//                             <div className={styles.slotsCont_time}>
//                                 <FlareOutlinedIcon className={styles.icon} color="action" />
//                                 <p>Afternoon</p>
//                             </div>
//                             <div className={styles.slotsCont_slots}>
//                                 {
//                                     slots.map(item => (
//                                         item.type === 1 && !bookedSlots.includes(item.time) && <Button variant="outlined" className={classes.slotItem} key={item.time} value={item.time} color="primary" onClick={(e) => handleBookSlot(e.target.value)}>{item.timeStr}</Button>
//                                     ))
//                                 }
//                             </div>
//                         </Box>
//                         <Divider />
//                         <Box className={classes.slotsCont}>
//                             <div className={styles.slotsCont_time}>
//                                 <Brightness2OutlinedIcon className={styles.icon} color="action" />
//                                 <p>Evening</p>
//                             </div>
//                             <div className={styles.slotsCont_slots}>
//                                 {
//                                     slots.map(item => (
//                                         item.type === 2 && !bookedSlots.includes(item.time) && <Button variant="outlined" className={classes.slotItem} key={item.time} value={item.time} color="primary" onClick={(e) => handleBookSlot(e.target.value)}>{item.timeStr}</Button>
//                                     ))
//                                 }
//                             </div>
//                         </Box>
//                         <Divider />
//                         <Box className={classes.slotsCont}>
//                             <div className={styles.slotsCont_time}>
//                                 <NightsStayOutlinedIcon className={styles.icon} color="action" />
//                                 <p>Night</p>
//                             </div>
//                             <div className={styles.slotsCont_slots}>
//                                 {
//                                     slots.map(item => (
//                                         item.type === 3 && !bookedSlots.includes(item.time) && <Button variant="outlined" className={classes.slotItem} key={item.time} value={item.time} color="primary" onClick={(e) => handleBookSlot(e.target.value)}>{item.timeStr}</Button>
//                                     ))
//                                 }
//                             </div>
//                         </Box>
//                     </TabPanel>
//                 ))
//             }
//         </div>
//     );
// }
// export { Booking }