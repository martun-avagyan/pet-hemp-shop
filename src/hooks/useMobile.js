import { BreakPoints } from '../utils/breakPoints';
import useScreenDimensions from './useScreenDimensions';

function useIsMobile() {
	const { width } = useScreenDimensions();
	return width <= BreakPoints.Medium;
}

export default useIsMobile;