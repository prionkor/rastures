import { MouseEventHandler, useState } from 'react';
import { Typography } from '@mui/material';
import { alpha, Box, styled } from '@mui/system';
import { makeStyles } from '@mui/styles';

import GridOnIcon from '@mui/icons-material/GridOn';

// types
import type { NextPage } from 'next';
import type { Theme } from '@mui/material/styles';
import { TableGridItemType } from '../utils';
import { Layout, ItemEditDialog } from '../components';
import Draggable from 'react-draggable';

const useStyles = makeStyles<Theme>(theme => ({
	editorContainer: {},
	editor: {
		gridTemplateColumns: 'repeat(15, calc(100%/15))',
		gridTemplateRows: 'repeat(10, 60px)',
		'&> div': {
			background: alpha(theme.palette.primary.main, 0.1),
			border: '1px solid ' + theme.palette.primary.main,
			margin: 4,
			cursor: 'pointer',
		},
		minWidth: 800,
	},
}));

type ItemProps = { id: number; onClick: MouseEventHandler };

const Item: React.FC<ItemProps> = ({ id, onClick, children }) => {
	return (
		<Box sx={{ p: '.25rem' }} key={id} onClick={onClick} minWidth={50}>
			{children}
		</Box>
	);
};

type DraggerProps = { label: string };
const DraggerBox = styled(
	Box,
	{}
)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	cursor: 'grab',
}));
const Dragger: React.FC<DraggerProps> = ({ label }) => {
	const handleClick: MouseEventHandler = e => {
		e.preventDefault();
		e.stopPropagation();
	};
	return (
		<Draggable
			children={<DraggerBox onClick={handleClick}>{label}</DraggerBox>}
		/>
	);
};

const Home: NextPage = () => {
	const classes = useStyles();
	const [tables, setTables] = useState<(TableGridItemType | null)[]>(
		new Array(150).fill(null)
	);
	const [composeItem, setComposeItem] = useState<TableGridItemType | null>(
		null
	);
	const [composeItemIndex, setComposeItemIndex] = useState<number | null>(null);
	const onClickCell = (idx: number) => {
		setComposeItemIndex(idx);
		if (tables[idx]) {
			setComposeItem(tables[idx]);
		}
	};
	const onCancelItemEdit = () => {
		setComposeItem(null);
		setComposeItemIndex(null);
	};

	const onSubmitItemEdit = item => {};

	return (
		<Layout title="Edit Table Layout" icon={<GridOnIcon />} maxWidth={false}>
			<ItemEditDialog
				open={!!composeItemIndex}
				item={composeItem}
				onCancel={onCancelItemEdit}
				onSubmit={onSubmitItemEdit}
			/>

			<Box display="grid" className={classes.editor}>
				{new Array(150).fill(0).map((_, idx) => (
					<Item id={idx} onClick={() => onClickCell(idx)}>
						<Dragger label={`#${idx + 1}`} />
					</Item>
				))}
			</Box>
		</Layout>
	);
};

export default Home;
