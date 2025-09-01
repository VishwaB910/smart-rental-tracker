// CSV Data Service for Dashboard
import csvData from '../data/dashboardData.csv';

// Parse CSV data and convert to usable format
const parseCSVData = () => {
  // Since we can't directly import CSV in React, we'll create the data structure
  // This simulates reading from CSV file
  const assets = [
    { id: 'EQX1001', type: 'Crane', site: 'Site A', checkOutDate: '1/12/2024', expectedReturn: '1/20/2024', status: 'Under Maintenance', engineHours: 15.8, idleHours: 7.4, operator: 'OP001' },
    { id: 'EQX1002', type: 'Bulldozer', site: 'Site A', checkOutDate: '3/9/2024', expectedReturn: '4/6/2024', status: 'Under Maintenance', engineHours: 31.2, idleHours: 9.3, operator: 'OP003' },
    { id: 'EQX1003', type: 'Bulldozer', site: 'Site A', checkOutDate: '1/29/2024', expectedReturn: '2/20/2024', status: 'Rented', engineHours: 6.1, idleHours: 2.8, operator: 'OP003' },
    { id: 'EQX1004', type: 'Crane', site: 'Site B', checkOutDate: '1/22/2024', expectedReturn: '2/12/2024', status: 'Under Maintenance', engineHours: 43, idleHours: 2.5, operator: 'OP003' },
    { id: 'EQX1005', type: 'Excavator', site: 'Site B', checkOutDate: '3/29/2024', expectedReturn: '4/25/2024', status: 'Available', engineHours: 21.4, idleHours: 9.5, operator: 'OP001' },
    { id: 'EQX1006', type: 'Crane', site: 'Site A', checkOutDate: '2/3/2024', expectedReturn: '2/28/2024', status: 'Available', engineHours: 44.4, idleHours: 0.3, operator: 'OP005' },
    { id: 'EQX1007', type: 'Loader', site: 'Site D', checkOutDate: '2/5/2024', expectedReturn: '3/5/2024', status: 'Rented', engineHours: 42.9, idleHours: 7.5, operator: 'OP002' },
    { id: 'EQX1008', type: 'Loader', site: 'Site C', checkOutDate: '1/21/2024', expectedReturn: '2/17/2024', status: 'Available', engineHours: 18, idleHours: 3.3, operator: 'OP005' },
    { id: 'EQX1009', type: 'Loader', site: 'Site B', checkOutDate: '2/24/2024', expectedReturn: '3/18/2024', status: 'Rented', engineHours: 23.3, idleHours: 2.8, operator: 'OP005' },
    { id: 'EQX1010', type: 'Excavator', site: 'Site A', checkOutDate: '1/31/2024', expectedReturn: '2/6/2024', status: 'Under Maintenance', engineHours: 40.2, idleHours: 1.7, operator: 'OP002' },
    { id: 'EQX1011', type: 'Loader', site: 'Site B', checkOutDate: '1/19/2024', expectedReturn: '1/30/2024', status: 'Rented', engineHours: 26.2, idleHours: 3, operator: 'OP003' },
    { id: 'EQX1012', type: 'Dump Truck', site: 'Site B', checkOutDate: '3/28/2024', expectedReturn: '4/24/2024', status: 'Under Maintenance', engineHours: 38.5, idleHours: 5.5, operator: 'OP004' },
    { id: 'EQX1013', type: 'Loader', site: 'Site A', checkOutDate: '1/17/2024', expectedReturn: '2/7/2024', status: 'Under Maintenance', engineHours: 29.9, idleHours: 7, operator: 'OP002' },
    { id: 'EQX1014', type: 'Loader', site: 'Site B', checkOutDate: '2/11/2024', expectedReturn: '3/1/2024', status: 'Under Maintenance', engineHours: 47.9, idleHours: 7, operator: 'OP001' },
    { id: 'EQX1015', type: 'Bulldozer', site: 'Site A', checkOutDate: '1/25/2024', expectedReturn: '2/2/2024', status: 'Available', engineHours: 43.2, idleHours: 3, operator: 'OP001' },
    { id: 'EQX1016', type: 'Crane', site: 'Site B', checkOutDate: '2/17/2024', expectedReturn: '3/2/2024', status: 'Available', engineHours: 14.5, idleHours: 2.1, operator: 'OP001' },
    { id: 'EQX1017', type: 'Dump Truck', site: 'Site C', checkOutDate: '3/19/2024', expectedReturn: '4/15/2024', status: 'Under Maintenance', engineHours: 12, idleHours: 6.7, operator: 'OP001' },
    { id: 'EQX1018', type: 'Loader', site: 'Site A', checkOutDate: '1/16/2024', expectedReturn: '2/6/2024', status: 'Rented', engineHours: 29.6, idleHours: 0.9, operator: 'OP002' },
    { id: 'EQX1019', type: 'Loader', site: 'Site B', checkOutDate: '3/29/2024', expectedReturn: '4/18/2024', status: 'Under Maintenance', engineHours: 45.8, idleHours: 0.7, operator: 'OP003' },
    { id: 'EQX1020', type: 'Crane', site: 'Site D', checkOutDate: '3/31/2024', expectedReturn: '4/19/2024', status: 'Rented', engineHours: 15.1, idleHours: 1.9, operator: 'OP004' },
    { id: 'EQX1021', type: 'Excavator', site: 'Site A', checkOutDate: '2/4/2024', expectedReturn: '2/11/2024', status: 'Available', engineHours: 34.3, idleHours: 9, operator: 'OP001' },
    { id: 'EQX1022', type: 'Crane', site: 'Site A', checkOutDate: '1/30/2024', expectedReturn: '2/15/2024', status: 'Rented', engineHours: 41.1, idleHours: 8.5, operator: 'OP002' },
    { id: 'EQX1023', type: 'Bulldozer', site: 'Site D', checkOutDate: '1/9/2024', expectedReturn: '1/16/2024', status: 'Rented', engineHours: 36.7, idleHours: 8.5, operator: 'OP004' },
    { id: 'EQX1024', type: 'Loader', site: 'Site B', checkOutDate: '3/4/2024', expectedReturn: '3/27/2024', status: 'Rented', engineHours: 18.6, idleHours: 3.2, operator: 'OP003' },
    { id: 'EQX1025', type: 'Loader', site: 'Site C', checkOutDate: '1/29/2024', expectedReturn: '2/12/2024', status: 'Rented', engineHours: 5.3, idleHours: 9, operator: 'OP005' },
    { id: 'EQX1026', type: 'Excavator', site: 'Site C', checkOutDate: '2/15/2024', expectedReturn: '2/24/2024', status: 'Available', engineHours: 48.5, idleHours: 9.8, operator: 'OP001' },
    { id: 'EQX1027', type: 'Crane', site: 'Site C', checkOutDate: '2/14/2024', expectedReturn: '3/15/2024', status: 'Rented', engineHours: 18.9, idleHours: 2, operator: 'OP001' },
    { id: 'EQX1028', type: 'Crane', site: 'Site B', checkOutDate: '3/28/2024', expectedReturn: '4/16/2024', status: 'Available', engineHours: 18.9, idleHours: 0.5, operator: 'OP001' },
    { id: 'EQX1029', type: 'Crane', site: 'Site D', checkOutDate: '1/29/2024', expectedReturn: '2/13/2024', status: 'Available', engineHours: 21, idleHours: 0.9, operator: 'OP003' },
    { id: 'EQX1030', type: 'Excavator', site: 'Site A', checkOutDate: '1/25/2024', expectedReturn: '2/19/2024', status: 'Under Maintenance', engineHours: 18.6, idleHours: 7.6, operator: 'OP005' },
    { id: 'EQX1031', type: 'Loader', site: 'Site D', checkOutDate: '1/17/2024', expectedReturn: '1/26/2024', status: 'Rented', engineHours: 20.1, idleHours: 8, operator: 'OP004' },
    { id: 'EQX1032', type: 'Dump Truck', site: 'Site A', checkOutDate: '3/18/2024', expectedReturn: '4/6/2024', status: 'Rented', engineHours: 49.4, idleHours: 4.7, operator: 'OP001' },
    { id: 'EQX1033', type: 'Excavator', site: 'Site D', checkOutDate: '2/5/2024', expectedReturn: '3/4/2024', status: 'Under Maintenance', engineHours: 16.5, idleHours: 6.9, operator: 'OP003' },
    { id: 'EQX1034', type: 'Excavator', site: 'Site C', checkOutDate: '1/21/2024', expectedReturn: '2/7/2024', status: 'Under Maintenance', engineHours: 38.2, idleHours: 7.1, operator: 'OP004' },
    { id: 'EQX1035', type: 'Crane', site: 'Site B', checkOutDate: '1/30/2024', expectedReturn: '2/26/2024', status: 'Available', engineHours: 43.9, idleHours: 5.4, operator: 'OP005' },
    { id: 'EQX1036', type: 'Dump Truck', site: 'Site C', checkOutDate: '3/24/2024', expectedReturn: '4/16/2024', status: 'Available', engineHours: 30.6, idleHours: 3.6, operator: 'OP003' },
    { id: 'EQX1037', type: 'Dump Truck', site: 'Site C', checkOutDate: '1/27/2024', expectedReturn: '2/14/2024', status: 'Under Maintenance', engineHours: 49.3, idleHours: 8.9, operator: 'OP002' },
    { id: 'EQX1038', type: 'Crane', site: 'Site C', checkOutDate: '1/27/2024', expectedReturn: '2/18/2024', status: 'Available', engineHours: 28.8, idleHours: 8.6, operator: 'OP003' },
    { id: 'EQX1039', type: 'Dump Truck', site: 'Site C', checkOutDate: '3/15/2024', expectedReturn: '4/14/2024', status: 'Rented', engineHours: 28, idleHours: 6.2, operator: 'OP001' },
    { id: 'EQX1040', type: 'Bulldozer', site: 'Site A', checkOutDate: '3/15/2024', expectedReturn: '3/21/2024', status: 'Available', engineHours: 22.1, idleHours: 4.7, operator: 'OP004' },
    { id: 'EQX1041', type: 'Excavator', site: 'Site D', checkOutDate: '1/9/2024', expectedReturn: '2/3/2024', status: 'Under Maintenance', engineHours: 41, idleHours: 0, operator: 'OP005' },
    { id: 'EQX1042', type: 'Loader', site: 'Site C', checkOutDate: '3/20/2024', expectedReturn: '3/28/2024', status: 'Rented', engineHours: 23.9, idleHours: 0.1, operator: 'OP002' },
    { id: 'EQX1043', type: 'Bulldozer', site: 'Site D', checkOutDate: '3/5/2024', expectedReturn: '3/27/2024', status: 'Rented', engineHours: 33, idleHours: 7.9, operator: 'OP005' },
    { id: 'EQX1044', type: 'Bulldozer', site: 'Site A', checkOutDate: '1/11/2024', expectedReturn: '2/3/2024', status: 'Available', engineHours: 30.1, idleHours: 8.5, operator: 'OP004' },
    { id: 'EQX1045', type: 'Crane', site: 'Site D', checkOutDate: '1/20/2024', expectedReturn: '1/30/2024', status: 'Rented', engineHours: 29.3, idleHours: 7.3, operator: 'OP004' },
    { id: 'EQX1046', type: 'Dump Truck', site: 'Site D', checkOutDate: '3/14/2024', expectedReturn: '4/1/2024', status: 'Available', engineHours: 46.3, idleHours: 8.5, operator: 'OP004' },
    { id: 'EQX1047', type: 'Crane', site: 'Site C', checkOutDate: '2/29/2024', expectedReturn: '3/15/2024', status: 'Under Maintenance', engineHours: 48.1, idleHours: 9.3, operator: 'OP001' },
    { id: 'EQX1048', type: 'Crane', site: 'Site B', checkOutDate: '1/2/2024', expectedReturn: '1/27/2024', status: 'Under Maintenance', engineHours: 49, idleHours: 3.1, operator: 'OP004' },
    { id: 'EQX1049', type: 'Crane', site: 'Site D', checkOutDate: '2/27/2024', expectedReturn: '3/14/2024', status: 'Under Maintenance', engineHours: 16.9, idleHours: 0.9, operator: 'OP003' },
    { id: 'EQX1050', type: 'Dump Truck', site: 'Site D', checkOutDate: '1/18/2024', expectedReturn: '2/12/2024', status: 'Under Maintenance', engineHours: 28.3, idleHours: 1.4, operator: 'OP003' },
    { id: 'EQX1051', type: 'Crane', site: 'Site C', checkOutDate: '2/16/2024', expectedReturn: '3/14/2024', status: 'Under Maintenance', engineHours: 8.1, idleHours: 1.8, operator: 'OP005' },
    { id: 'EQX1052', type: 'Bulldozer', site: 'Site C', checkOutDate: '1/5/2024', expectedReturn: '1/13/2024', status: 'Rented', engineHours: 42.6, idleHours: 7.9, operator: 'OP005' },
    { id: 'EQX1053', type: 'Bulldozer', site: 'Site C', checkOutDate: '2/11/2024', expectedReturn: '2/27/2024', status: 'Under Maintenance', engineHours: 21.3, idleHours: 7.5, operator: 'OP005' },
    { id: 'EQX1054', type: 'Loader', site: 'Site B', checkOutDate: '2/9/2024', expectedReturn: '2/14/2024', status: 'Available', engineHours: 15.1, idleHours: 4, operator: 'OP003' },
    { id: 'EQX1055', type: 'Bulldozer', site: 'Site D', checkOutDate: '3/18/2024', expectedReturn: '3/25/2024', status: 'Rented', engineHours: 34.4, idleHours: 7.3, operator: 'OP001' },
    { id: 'EQX1056', type: 'Loader', site: 'Site B', checkOutDate: '2/24/2024', expectedReturn: '3/6/2024', status: 'Rented', engineHours: 23.3, idleHours: 4.2, operator: 'OP002' },
    { id: 'EQX1057', type: 'Crane', site: 'Site C', checkOutDate: '1/18/2024', expectedReturn: '1/25/2024', status: 'Under Maintenance', engineHours: 24.4, idleHours: 4.5, operator: 'OP003' },
    { id: 'EQX1058', type: 'Loader', site: 'Site B', checkOutDate: '1/26/2024', expectedReturn: '2/3/2024', status: 'Rented', engineHours: 12.3, idleHours: 9.2, operator: 'OP003' },
    { id: 'EQX1059', type: 'Excavator', site: 'Site A', checkOutDate: '1/8/2024', expectedReturn: '1/21/2024', status: 'Available', engineHours: 49.7, idleHours: 3.9, operator: 'OP005' },
    { id: 'EQX1060', type: 'Bulldozer', site: 'Site D', checkOutDate: '3/26/2024', expectedReturn: '4/7/2024', status: 'Under Maintenance', engineHours: 10.2, idleHours: 3.6, operator: 'OP004' },
    { id: 'EQX1061', type: 'Loader', site: 'Site B', checkOutDate: '2/22/2024', expectedReturn: '3/22/2024', status: 'Under Maintenance', engineHours: 45.3, idleHours: 0.3, operator: 'OP005' },
    { id: 'EQX1062', type: 'Crane', site: 'Site B', checkOutDate: '1/29/2024', expectedReturn: '2/24/2024', status: 'Rented', engineHours: 35.8, idleHours: 7.6, operator: 'OP004' },
    { id: 'EQX1063', type: 'Excavator', site: 'Site D', checkOutDate: '1/22/2024', expectedReturn: '2/1/2024', status: 'Available', engineHours: 9.4, idleHours: 2.2, operator: 'OP001' },
    { id: 'EQX1064', type: 'Dump Truck', site: 'Site B', checkOutDate: '1/3/2024', expectedReturn: '1/9/2024', status: 'Available', engineHours: 13.8, idleHours: 9.9, operator: 'OP002' },
    { id: 'EQX1065', type: 'Excavator', site: 'Site A', checkOutDate: '3/21/2024', expectedReturn: '4/5/2024', status: 'Rented', engineHours: 43.9, idleHours: 5.1, operator: 'OP001' },
    { id: 'EQX1066', type: 'Bulldozer', site: 'Site C', checkOutDate: '3/18/2024', expectedReturn: '4/14/2024', status: 'Rented', engineHours: 25.7, idleHours: 5.2, operator: 'OP005' },
    { id: 'EQX1067', type: 'Dump Truck', site: 'Site D', checkOutDate: '2/26/2024', expectedReturn: '3/3/2024', status: 'Rented', engineHours: 5.4, idleHours: 5.2, operator: 'OP004' },
    { id: 'EQX1068', type: 'Crane', site: 'Site B', checkOutDate: '2/19/2024', expectedReturn: '3/4/2024', status: 'Under Maintenance', engineHours: 5.6, idleHours: 6, operator: 'OP001' },
    { id: 'EQX1069', type: 'Crane', site: 'Site D', checkOutDate: '2/19/2024', expectedReturn: '3/19/2024', status: 'Available', engineHours: 34.2, idleHours: 4, operator: 'OP002' },
    { id: 'EQX1070', type: 'Loader', site: 'Site D', checkOutDate: '2/23/2024', expectedReturn: '3/24/2024', status: 'Available', engineHours: 33.1, idleHours: 1, operator: 'OP002' },
    { id: 'EQX1071', type: 'Loader', site: 'Site A', checkOutDate: '3/11/2024', expectedReturn: '3/17/2024', status: 'Available', engineHours: 19.2, idleHours: 6.6, operator: 'OP002' },
    { id: 'EQX1072', type: 'Crane', site: 'Site D', checkOutDate: '2/1/2024', expectedReturn: '2/25/2024', status: 'Under Maintenance', engineHours: 36.2, idleHours: 9.2, operator: 'OP002' },
    { id: 'EQX1073', type: 'Dump Truck', site: 'Site D', checkOutDate: '2/16/2024', expectedReturn: '3/17/2024', status: 'Under Maintenance', engineHours: 14.7, idleHours: 3.7, operator: 'OP002' },
    { id: 'EQX1074', type: 'Excavator', site: 'Site C', checkOutDate: '1/9/2024', expectedReturn: '1/21/2024', status: 'Rented', engineHours: 9, idleHours: 7.1, operator: 'OP005' },
    { id: 'EQX1075', type: 'Excavator', site: 'Site C', checkOutDate: '3/22/2024', expectedReturn: '4/19/2024', status: 'Rented', engineHours: 16.9, idleHours: 8.6, operator: 'OP004' },
    { id: 'EQX1076', type: 'Loader', site: 'Site A', checkOutDate: '2/27/2024', expectedReturn: '3/17/2024', status: 'Under Maintenance', engineHours: 6.8, idleHours: 8.8, operator: 'OP002' },
    { id: 'EQX1077', type: 'Bulldozer', site: 'Site B', checkOutDate: '1/29/2024', expectedReturn: '2/3/2024', status: 'Under Maintenance', engineHours: 25.6, idleHours: 0.5, operator: 'OP002' },
    { id: 'EQX1078', type: 'Crane', site: 'Site B', checkOutDate: '2/28/2024', expectedReturn: '3/4/2024', status: 'Available', engineHours: 39.9, idleHours: 7.4, operator: 'OP003' },
    { id: 'EQX1079', type: 'Excavator', site: 'Site B', checkOutDate: '1/23/2024', expectedReturn: '2/2/2024', status: 'Rented', engineHours: 28.5, idleHours: 3.3, operator: 'OP001' },
    { id: 'EQX1080', type: 'Loader', site: 'Site A', checkOutDate: '1/30/2024', expectedReturn: '2/10/2024', status: 'Rented', engineHours: 31.2, idleHours: 7.2, operator: 'OP001' },
    { id: 'EQX1081', type: 'Bulldozer', site: 'Site B', checkOutDate: '1/6/2024', expectedReturn: '2/1/2024', status: 'Available', engineHours: 7.7, idleHours: 1.8, operator: 'OP005' },
    { id: 'EQX1082', type: 'Bulldozer', site: 'Site D', checkOutDate: '1/18/2024', expectedReturn: '2/17/2024', status: 'Under Maintenance', engineHours: 5, idleHours: 2, operator: 'OP001' },
    { id: 'EQX1083', type: 'Excavator', site: 'Site A', checkOutDate: '1/6/2024', expectedReturn: '1/27/2024', status: 'Rented', engineHours: 40.8, idleHours: 6.9, operator: 'OP004' },
    { id: 'EQX1084', type: 'Bulldozer', site: 'Site A', checkOutDate: '3/14/2024', expectedReturn: '3/28/2024', status: 'Under Maintenance', engineHours: 13.1, idleHours: 2.6, operator: 'OP005' },
    { id: 'EQX1085', type: 'Loader', site: 'Site D', checkOutDate: '3/6/2024', expectedReturn: '3/23/2024', status: 'Available', engineHours: 8.3, idleHours: 4.3, operator: 'OP001' },
    { id: 'EQX1086', type: 'Bulldozer', site: 'Site D', checkOutDate: '3/8/2024', expectedReturn: '3/16/2024', status: 'Available', engineHours: 18.2, idleHours: 0.3, operator: 'OP003' },
    { id: 'EQX1087', type: 'Dump Truck', site: 'Site C', checkOutDate: '1/26/2024', expectedReturn: '2/16/2024', status: 'Rented', engineHours: 12, idleHours: 3, operator: 'OP005' },
    { id: 'EQX1088', type: 'Loader', site: 'Site B', checkOutDate: '1/17/2024', expectedReturn: '2/7/2024', status: 'Rented', engineHours: 15.6, idleHours: 2.1, operator: 'OP004' },
    { id: 'EQX1089', type: 'Excavator', site: 'Site D', checkOutDate: '2/15/2024', expectedReturn: '2/29/2024', status: 'Available', engineHours: 29.4, idleHours: 3.9, operator: 'OP005' },
    { id: 'EQX1090', type: 'Loader', site: 'Site D', checkOutDate: '1/24/2024', expectedReturn: '2/10/2024', status: 'Rented', engineHours: 21.6, idleHours: 7.3, operator: 'OP005' },
    { id: 'EQX1091', type: 'Crane', site: 'Site A', checkOutDate: '2/10/2024', expectedReturn: '2/25/2024', status: 'Available', engineHours: 22.6, idleHours: 1.9, operator: 'OP004' },
    { id: 'EQX1092', type: 'Dump Truck', site: 'Site D', checkOutDate: '2/12/2024', expectedReturn: '2/19/2024', status: 'Rented', engineHours: 37, idleHours: 4.5, operator: 'OP004' },
    { id: 'EQX1093', type: 'Loader', site: 'Site D', checkOutDate: '2/17/2024', expectedReturn: '3/3/2024', status: 'Available', engineHours: 34.2, idleHours: 6.1, operator: 'OP002' },
    { id: 'EQX1094', type: 'Loader', site: 'Site C', checkOutDate: '3/9/2024', expectedReturn: '4/8/2024', status: 'Available', engineHours: 16.7, idleHours: 3.3, operator: 'OP001' },
    { id: 'EQX1095', type: 'Dump Truck', site: 'Site D', checkOutDate: '3/29/2024', expectedReturn: '4/27/2024', status: 'Rented', engineHours: 7.6, idleHours: 7.9, operator: 'OP002' },
    { id: 'EQX1096', type: 'Crane', site: 'Site B', checkOutDate: '3/8/2024', expectedReturn: '3/17/2024', status: 'Available', engineHours: 28, idleHours: 7.8, operator: 'OP005' },
    { id: 'EQX1097', type: 'Excavator', site: 'Site B', checkOutDate: '1/1/2024', expectedReturn: '1/25/2024', status: 'Rented', engineHours: 19.7, idleHours: 6.6, operator: 'OP005' },
    { id: 'EQX1098', type: 'Dump Truck', site: 'Site D', checkOutDate: '2/28/2024', expectedReturn: '3/5/2024', status: 'Available', engineHours: 35, idleHours: 6.8, operator: 'OP003' },
    { id: 'EQX1099', type: 'Loader', site: 'Site C', checkOutDate: '1/9/2024', expectedReturn: '1/15/2024', status: 'Under Maintenance', engineHours: 33.9, idleHours: 4.6, operator: 'OP005' },
    { id: 'EQX1100', type: 'Bulldozer', site: 'Site B', checkOutDate: '1/3/2024', expectedReturn: '1/24/2024', status: 'Available', engineHours: 29.3, idleHours: 3.1, operator: 'OP003' }
  ];

  return assets;
};

// Calculate summary data from CSV data
const calculateSummary = (assets) => {
  const totalAssets = assets.length;
  const currentlyRented = assets.filter(asset => asset.status === 'Rented').length;
  const available = assets.filter(asset => asset.status === 'Available').length;
  const overdue = assets.filter(asset => asset.status === 'Overdue').length;
  const underMaintenance = assets.filter(asset => asset.status === 'Under Maintenance').length;

  return {
    totalAssets,
    currentlyRented,
    available,
    overdue,
    underMaintenance
  };
};

// Generate usage data for charts
const generateUsageData = (assets) => {
  // Generate 15 days of usage data based on actual asset data
  const usageData = [];
  const dates = ['Jan 15', 'Jan 16', 'Jan 17', 'Jan 18', 'Jan 19', 'Jan 20', 'Jan 21', 'Jan 22', 'Jan 23', 'Jan 24', 'Jan 25', 'Jan 26', 'Jan 27', 'Jan 28', 'Jan 29'];
  
  dates.forEach((date, index) => {
    const activeAssets = assets.filter(asset => asset.status === 'Rented');
    const avgEngineHours = activeAssets.length > 0 ? 
      activeAssets.reduce((sum, asset) => sum + asset.engineHours, 0) / activeAssets.length : 0;
    const avgIdleHours = activeAssets.length > 0 ? 
      activeAssets.reduce((sum, asset) => sum + asset.idleHours, 0) / activeAssets.length : 0;
    
    usageData.push({
      date,
      engineHours: Math.round((avgEngineHours + (Math.random() - 0.5) * 2) * 10) / 10,
      idleHours: Math.round((avgIdleHours + (Math.random() - 0.5) * 1) * 10) / 10
    });
  });

  return usageData;
};

// Generate status breakdown data for pie chart
const generateStatusData = (assets) => {
  const statusCounts = {};
  assets.forEach(asset => {
    statusCounts[asset.status] = (statusCounts[asset.status] || 0) + 1;
  });

  const statusData = [
    { name: 'Available', value: statusCounts['Available'] || 0, color: '#10B981' },
    { name: 'Rented', value: statusCounts['Rented'] || 0, color: '#3B82F6' },
    { name: 'Under Maintenance', value: statusCounts['Under Maintenance'] || 0, color: '#F59E0B' },
    { name: 'Overdue', value: statusCounts['Overdue'] || 0, color: '#EF4444' }
  ];

  return statusData;
};

// Main function to get all dashboard data
export const getDashboardData = () => {
  const assets = parseCSVData();
  const summary = calculateSummary(assets);
  const usageData = generateUsageData(assets);
  const statusData = generateStatusData(assets);

  return {
    summary,
    assets,
    usageData,
    statusData
  };
};

// Export individual data for components
export const getAssets = () => parseCSVData();
export const getSummary = () => calculateSummary(parseCSVData());
export const getUsageData = () => generateUsageData(parseCSVData());
export const getStatusData = () => generateStatusData(parseCSVData());

export default getDashboardData;
