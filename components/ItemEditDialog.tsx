import {
	Button,
	TextField,
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
} from '@mui/material';
import { MouseEventHandler } from 'react';
import { TableGridItemType } from '../utils';

type ItemEditDialogProps = {
	open: boolean;
	item: TableGridItemType | null;
	onCancel: MouseEventHandler;
	onSubmit: MouseEventHandler;
};

const ItemEditDialog: React.FC<ItemEditDialogProps> = ({
	open,
	item,
	onCancel,
	onSubmit,
}) => {
	const totalSeats = item?.totalSeats ?? '';
	const title =
		item !== null && item?.id ? 'Edit table: ' + (item.id + 1) : 'New Table';

	return (
		<Dialog open={open}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					color="secondary"
					margin="dense"
					id="total-seats"
					label="Total number of seats"
					type="number"
					fullWidth
					variant="outlined"
					value={totalSeats}
				/>
			</DialogContent>
			<DialogActions>
				<Button
					variant="outlined"
					color="secondary"
					disableElevation
					onClick={onCancel}
				>
					Cancel
				</Button>
				<Button
					variant="contained"
					color="primary"
					disableElevation
					onClick={onSubmit}
				>
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ItemEditDialog;
