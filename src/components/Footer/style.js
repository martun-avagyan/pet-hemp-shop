import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	root: {
		display: 'flex',
		maxWidth: '1280px',
		margin: '82px auto',
		justifyContent: 'center',
		gap: '30px',
	},
	column: {
		display: 'flex',
		flexDirection: 'column',
		gap: '20px',
	},
	title: {
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: 500,
		fontSize: '22px',
		lineHeight: '35px',
		color: '#262626',
	},
	item: {
		maxWidth: '299px',
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: '18px',
		lineHeight: '190%',
		color: '#262626',
	},
	article: {
		fontSize: '14px',
	},
}, {
	name: 'footer',
});

export default useStyles;