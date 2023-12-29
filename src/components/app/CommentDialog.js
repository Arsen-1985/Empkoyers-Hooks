import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const CommentDialog = ({ open, onClose, onAddComment }) => {
    const [comment, setComment] = useState('');

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleAddComment = () => {
        onAddComment(comment);
        setComment('');
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add a comment</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="A comment"
                    type="text"
                    fullWidth
                    multiline
                    value={comment}
                    onChange={handleCommentChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleAddComment}>Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CommentDialog;
