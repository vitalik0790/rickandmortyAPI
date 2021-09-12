// import React, { useState } from 'react';
// import s from './WatchListItem.module.css'

// const WatchListItem = ({
//     checked,
//     item,
//     deleteEpisode,
//     onHandleChange
// }) => {
//     const [checked_in] = useState(checked);

//     return (
//         <div className={s.container}>
//             <div className={s.checkbox}>
//                 <input
//                     className={s.customCheckbox}
//                     type="checkbox"
//                     id="complete"
//                     name="complete"
//                     defaultChecked={checked_in}
//                     onChange={onHandleChange}
//                 />
//                 <label htmlFor="complete">Completed</label>
//             </div>
//             <div>
//                 <h3 className={s.listItemName}>{item.name} </h3>
//             </div>
//             <div>
//                 <button
//                     type="button"
//                     className={s.listItemBtn}
//                     data-id={item.id}
//                     onClick={deleteEpisode}
//                 >
//                     <svg
//                         className={s.listItemIcon}
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         width="25px"
//                         height="25px"
//                     >
//                         <path d="M0 0h24v24H0z" fill="none" />
//                         <path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z" />
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default WatchListItem;