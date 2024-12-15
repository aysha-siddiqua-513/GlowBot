// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { AppBar, Toolbar, Typography, TextField, Button, Select, MenuItem, InputAdornment, IconButton } from '@mui/material';
// import SpaIcon from '@mui/icons-material/Spa';
// import SearchIcon from '@mui/icons-material/Search';
// import ClearIcon from '@mui/icons-material/Clear';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useDropzone } from 'react-dropzone';

// // Styled Components
// const AppContainer = styled.div
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 20px;
//   background-color: #ffffff;
//   border-radius: 8px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
// ;

// const Content = styled.div
//   text-align: center;
// ;

// const Title = styled.h1
//   font-size: 36px;
//   color: #d81b60;
//   margin: 20px 0;
// ;

// const JournalEntries = styled.div
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin-top: 20px;
// ;

// const EntryCard = styled.div
//   width: 300px;
//   background-color: #fce4ec;
//   margin: 10px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   transition: transform 0.2s;
//   position: relative;
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
//   }
// ;

// const EntryImage = styled.img
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px;
// ;

// const EntryDetails = styled.div
//   padding: 15px;
//   text-align: left;
// ;

// const FormContainer = styled.form
//   background-color: #f8bbd0;
//   padding: 30px;
//   border-radius: 10px;
//   margin-bottom: 40px;
// ;

// const UploadContainer = styled.div
//   border: 2px dashed #d81b60;
//   padding: 20px;
//   cursor: pointer;
//   margin-bottom: 20px;
// ;

// const UploadedFiles = styled.div
//   margin-top: 10px;
// ;

// const SearchContainer = styled.div
//   display: flex;
//   justify-content: center;
//   margin: 20px 0;
//   align-items: center;
// ;

// const EntrySortContainer = styled.div
//   display: flex;
//   justify-content: center;
//   margin-bottom: 20px;
// ;

// const ResetButton = styled(Button)
//   margin-left: 10px;
// ;

// // Main Tracker Component
// const Tracker = () => {
//   const [entries, setEntries] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [date, setDate] = useState('');
//   const [products, setProducts] = useState('');
//   const [skinCondition, setSkinCondition] = useState('');
//   const [image, setImage] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOrder, setSortOrder] = useState('date');
//   const [editIndex, setEditIndex] = useState(-1); // Track the entry being edited

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title || !description || !date || !products || !skinCondition || !image) {
//       alert('All fields are required!');
//       return;
//     }

//     const newEntry = {
//       title,
//       description,
//       date,
//       products,
//       skinCondition,
//       image,
//     };

//     if (editIndex === -1) {
//       // Add new entry
//       setEntries([...entries, newEntry]);
//     } else {
//       // Update existing entry
//       const updatedEntries = entries.map((entry, index) =>
//         index === editIndex ? newEntry : entry
//       );
//       setEntries(updatedEntries);
//       setEditIndex(-1); // Reset edit index after editing
//     }

//     // Reset form fields
//     resetForm();
//   };

//   // Reset form fields
//   const resetForm = () => {
//     setTitle('');
//     setDescription('');
//     setDate('');
//     setProducts('');
//     setSkinCondition('');
//     setImage(null);
//   };

//   // Image Upload Component
//   const ImageUpload = () => {
//     const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
//       accept: 'image/*',
//       onDrop: (acceptedFiles) => {
//         const file = acceptedFiles[0];
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           setImage(reader.result);
//         };
//         reader.readAsDataURL(file);
//       },
//     });

//     return (
//       <UploadContainer {...getRootProps()}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop an image here, or click to select one</p>
//         <UploadedFiles>
//           {acceptedFiles.map((file) => (
//             <p key={file.path}>{file.path}</p>
//           ))}
//         </UploadedFiles>
//       </UploadContainer>
//     );
//   };

//   // Filter and sort entries
//   const filteredEntries = entries
//     .filter(entry => entry.title.toLowerCase().includes(searchQuery.toLowerCase()))
//     .sort((a, b) => {
//       if (sortOrder === 'date') {
//         return new Date(b.date) - new Date(a.date);
//       }
//       return a.title.localeCompare(b.title);
//     });

//   // Handle Edit Entry
//   const handleEdit = (index) => {
//     const entryToEdit = entries[index];
//     setTitle(entryToEdit.title);
//     setDescription(entryToEdit.description);
//     setDate(entryToEdit.date);
//     setProducts(entryToEdit.products);
//     setSkinCondition(entryToEdit.skinCondition);
//     setImage(entryToEdit.image);
//     setEditIndex(index); // Set the index for editing
//   };

//   // Handle Delete Entry
//   const handleDelete = (index) => {
//     const newEntries = entries.filter((_, i) => i !== index);
//     setEntries(newEntries);
//   };

//   return (
//     <AppContainer>
//       {/* Navbar */}
//       <AppBar position="static" style={{ backgroundColor: '#f48fb1' }}>
//         <Toolbar>
//           <SpaIcon style={{ marginRight: 10 }} />
//           <Typography variant="h6" component="div">
//             Skincare Journal
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Content>
//         <Title>Your Skincare Journal</Title>

//         {/* Journal Entry Form */}
//         <FormContainer onSubmit={handleSubmit}>
//           <TextField
//             label="Entry Title"
//             variant="outlined"
//             fullWidth
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             style={{ marginBottom: '20px' }}
//           />
//           <TextField
//             label="Description"
//             variant="outlined"
//             multiline
//             rows={4}
//             fullWidth
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             style={{ marginBottom: '20px' }}
//           />
//           <TextField
//             label="Date"
//             type="date"
//             fullWidth
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             InputLabelProps={{ shrink: true }}
//             required
//             style={{ marginBottom: '20px' }}
//           />
//           <TextField
//             label="Products Used"
//             variant="outlined"
//             fullWidth
//             value={products}
//             onChange={(e) => setProducts(e.target.value)}
//             required
//             style={{ marginBottom: '20px' }}
//           />
//           <TextField
//             label="Skin Condition"
//             variant="outlined"
//             fullWidth
//             value={skinCondition}
//             onChange={(e) => setSkinCondition(e.target.value)}
//             required
//             style={{ marginBottom: '20px' }}
//           />

//           <ImageUpload />

//           <Button variant="contained" color="primary" type="submit" fullWidth>
//             {editIndex === -1 ? 'Add Entry' : 'Update Entry'}
//           </Button>
//         </FormContainer>

//         {/* Search Bar */}
//         <SearchContainer>
//           <TextField
//             label="Search Entries"
//             variant="outlined"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton onClick={() => setSearchQuery('')}>
//                     <ClearIcon />
//                   </IconButton>
//                   <IconButton>
//                     <SearchIcon />
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </SearchContainer>

//         {/* Sort Options */}
//         <EntrySortContainer>
//           <Select
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//             style={{ marginRight: '10px' }}
//           >
//             <MenuItem value="date">Sort by Date</MenuItem>
//             <MenuItem value="title">Sort by Title</MenuItem>
//           </Select>
//         </EntrySortContainer>

//         {/* Journal Entries List */}
//         <JournalEntries>
//           {filteredEntries.map((entry, index) => (
//             <EntryCard key={index}>
//               <EntryImage src={entry.image} alt={entry.title} />
//               <EntryDetails>
//                 <h2>{entry.title}</h2>
//                 <p><strong>Description:</strong> {entry.description}</p>
//                 <p><strong>Date:</strong> {entry.date}</p>
//                 <p><strong>Products Used:</strong> {entry.products}</p>
//                 <p><strong>Skin Condition:</strong> {entry.skinCondition}</p>
//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   onClick={() => handleEdit(index)}
//                   startIcon={<EditIcon />}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   onClick={() => handleDelete(index)}
//                   startIcon={<DeleteIcon />}
//                   style={{ marginLeft: '10px' }}
//                 >
//                   Delete
//                 </Button>
//               </EntryDetails>
//             </EntryCard>
//           ))}
//         </JournalEntries>
//       </Content>
//     </AppContainer>
//   );
// };

// export default Tracker;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Box,TextField, Button, Select, MenuItem, InputAdornment, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDropzone } from 'react-dropzone';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Footer from './Footer';
import Header from './Header';

// Styled Components
const AppContainer = styled.div`
  
  
  padding: 80px;
  background-image: url(ai.jpg); /* Change this to your image path */
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  // position: relative; /* Added for absolute positioning of FormContainer */
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #4a4031;
  margin: 20px 0;
`;

const JournalEntries = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const EntryCard = styled.div`
  width: 300px;
  background-color: #e6d9d0;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  position: relative;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const EntryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const EntryDetails = styled.div`
  padding: 15px;
  text-align: left;
`;

const FormContainer = styled.form`
  background-color: rgba(230, 217, 208, 0.5); /* Semi-transparent background for blur effect */
  backdrop-filter: blur(5px); /* Apply blur effect */
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 40px;
`;

const UploadContainer = styled.div`
  border: 2px dashed #4a4031;
  padding: 20px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const UploadedFiles = styled.div`
  margin-top: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  align-items: center;
  flex-direction: column;
`;

const EntrySortContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ResetButton = styled(Button)`
  margin-left: 10px;
  border-radius: 20px;
  background-color: primary;
  color: white;
  &:hover {
    background-color: primary;
  }
`;

const SearchInput = styled(TextField)`
  border-radius: 20px;
  margin-right: 10px;
  .MuiOutlinedInput-root {
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

// Main Tracker Component
const Tracker = () => {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [products, setProducts] = useState('');
  const [skinCondition, setSkinCondition] = useState('');
  const [tags, setTags] = useState('');
  const [mood, setMood] = useState('');
  const [image, setImage] = useState(null);
  const [beforeImage, setBeforeImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('date');
  const [editIndex, setEditIndex] = useState(-1);
  const [reminder, setReminder] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !date || !products || !skinCondition || !tags || !image || !beforeImage || !mood) {
      alert('All fields are required!');
      return;
    }

    const newEntry = {
      title,
      description,
      date,
      products,
      skinCondition,
      tags,
      mood,
      image,
      beforeImage,
      reminder,
    };

    if (editIndex === -1) {
              // Add new entry
              setEntries([...entries, newEntry]);
            } else {
              // Update existing entry
              const updatedEntries = entries.map((entry, index) =>
                index === editIndex ? newEntry : entry
              );
              setEntries(updatedEntries);
              setEditIndex(-1); // Reset edit index after editing
            }
        
            // Reset form fields
            resetForm();
          };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDate('');
    setProducts('');
    setSkinCondition('');
    setTags('');
    setMood('');
    setImage(null);
    setBeforeImage(null);
    setReminder('');
  };

  const ImageUpload = ({ setImageCallback, label }) => {
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
      accept: 'image/*',
      onDrop: (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageCallback(reader.result);
        };
        reader.readAsDataURL(file);
      },
    });

    return (
      <UploadContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <p>{label}</p>
        <UploadedFiles>
          {acceptedFiles.map((file) => (
            <p key={file.path}>{file.path}</p>
          ))}
        </UploadedFiles>
      </UploadContainer>
    );
  };

  const filteredEntries = entries
    .filter(entry => entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    entry.tags.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    entry.skinCondition.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'date') {
        return new Date(b.date) - new Date(a.date);
      }
      return a.title.localeCompare(b.title);
    });

  const handleEdit = (index) => {
    const entryToEdit = entries[index];
    setTitle(entryToEdit.title);
    setDescription(entryToEdit.description);
    setDate(entryToEdit.date);
    setProducts(entryToEdit.products);
    setSkinCondition(entryToEdit.skinCondition);
    setTags(entryToEdit.tags);
    setMood(entryToEdit.mood);
    setImage(entryToEdit.image);
    setBeforeImage(entryToEdit.beforeImage);
    setReminder(entryToEdit.reminder);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(entries, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'skincare-journal.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Box sx={{ backgroundColor: '#dfd0c7' }}>
        {/* Header Component */}
      <Header />
    <AppContainer>

      <Content>
      <br />
        <Title>Your Skincare Tracker</Title>

        {/* Journal Entry Form */}
        <FormContainer onSubmit={handleSubmit}>
          <TextField
            label="Entry Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            multiline
            rows={4}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="Date"
            variant="outlined"
            type="date"
            fullWidth
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            InputLabelProps={{
              shrink: true,
            }}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="Products Used"
            variant="outlined"
            fullWidth
            value={products}
            onChange={(e) => setProducts(e.target.value)}
            required
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="Skin Condition"
            variant="outlined"
            fullWidth
            value={skinCondition}
            onChange={(e) => setSkinCondition(e.target.value)}
            required
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="Tags (comma separated)"
            variant="outlined"
            fullWidth
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
            style={{ marginBottom: '20px' }}
          />
          <Select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            displayEmpty
            fullWidth
            required
            style={{ marginBottom: '20px' }}
          >
            <MenuItem value="" disabled>Select Mood</MenuItem>
            <MenuItem value="happy">Happy</MenuItem>
            <MenuItem value="neutral">Neutral</MenuItem>
            <MenuItem value="sad">Sad</MenuItem>
          </Select>

          <ImageUpload setImageCallback={setImage} label="Upload After Image" />
          <ImageUpload setImageCallback={setBeforeImage} label="Upload Before Image" />

          <TextField
            label="Reminder (optional)"
            variant="outlined"
            fullWidth
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
            style={{ marginBottom: '20px' }}
          />
          <Button type="submit" variant="contained" color="primary" style={{ borderRadius: '20px', marginBottom: '20px' }}>
            {editIndex === -1 ? 'Add Entry' : 'Update Entry'}
          </Button>
        </FormContainer>

        {/* Search and Sort */}
        <EntrySortContainer>
          <SearchContainer>
            <SearchInput
              label="Search Entries.."
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setSearchQuery('')}>
                      <ClearIcon />
                    </IconButton>
                    <IconButton>
                        <SearchIcon />
                       </IconButton>
                  </InputAdornment>
                ),
              }}
              style={{ marginRight: '1px' }}
            />
            
          </SearchContainer>
        </EntrySortContainer>

        {/* Journal Entries */}
        <JournalEntries>
          
          {filteredEntries.map((entry, index) => (
            <EntryCard key={index}>
              <EntryDetails>
                <h2><i>{entry.title}</i></h2>
{/*             
          <br/> */}
              <EntryImage src={entry.image} alt="Entry" />
                <p>{entry.description}</p>
                <p><strong>Date:</strong> {entry.date}</p>
                <p><strong>Products:</strong> {entry.products}</p>
                <p><strong>Skin Condition:</strong> {entry.skinCondition}</p>
                <p><strong>Tags:</strong> {entry.tags}</p>
                <p><strong>Mood:</strong> {entry.mood}</p>
                <p><strong>Before Image:</strong></p>
                <EntryImage src={entry.beforeImage} alt="Before Entry" />
                <p><strong>Reminder:</strong> {entry.reminder}</p>
                <Button
                  variant="outlined"
                  color=""
                  onClick={() => handleEdit(index)}
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color=""
                  onClick={() => handleDelete(index)}
                  startIcon={<DeleteIcon />}
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </Button>
              </EntryDetails>
            </EntryCard>
          ))}
        </JournalEntries>
            <ResetButton variant="contained" color="primary" onClick={handleExport} startIcon={<SaveAltIcon />}>
            Export Journal
          </ResetButton>
      </Content>
    </AppContainer>
    <Footer />
    </Box>
      
  );
};

export default Tracker;
