import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	root: {
		display: 'flex',
		margin: '0 auto',
		maxWidth: '1062px',
		height: '442px',
		marginBottom: '130px',
	},
	left: {
		display: 'flex',
		width: '51%',
		background: '#E3F2F2',

	},
	leftContent: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		margin: 40,
		gap: '20px',
	},
	badge: {
		width: '139px',
		height: '139px',
	},
	right: {
		position: 'relative',
		width: '49%',
	},
	rightContent: {
		margin: 'auto',
		position: 'absolute',
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		// margin: [40, 93, 68, 94],
		color: 'white',
	},
	leaves: {
		width: '100%',
		height: '100%',
	},
	leaf: {
		width: '125.71px',
		height: '130.67px',
	},
	rightTitle: {
		fontFamily: 'Montserrat',
		fontWeight: '600',
		fontSize: '32px',
		lineHeight: '130%',
	},
	rightDescription: {
		fontFamily: 'Roboto',
		maxWidth: '234px',
		fontStyle: 'normal',
		fontWeight: 400,

	},
	leftTitle: {
		fontFamily: 'Montserrat',
		fontWeight: '600',
		fontSize: '32px',
		lineHeight: '130%',
	},
	leftDescription: {
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: 400,
		textAlign: 'center',
	},
}, {
	name: 'trusted-guarantee',
});

export default useStyles;