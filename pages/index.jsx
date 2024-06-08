import Hero 		from '../components/sections/index/hero'
import Looking 		from '../components/sections/index/looking'
import About 		from '../components/sections/index/about'
import Technical 	from '../components/sections/index/technical'
import Career 		from '../components/sections/index/career'
import FeaturedProjects	from '../components/sections/projects/featured'

import Color 		from '../components/utils/page.colors.util'

import colors 		from '../content/index/_colors.json'

//
export default function HomePage() {

	return (
		<>
			<Color colors={colors} />
			<Hero />
			{/* <Looking /> */}
			<FeaturedProjects />
			<Technical />
			<About />
			{/* <Career /> */}
		</>
	);
}





// TODO:
// 
// Add current projects instead of placeholder projects
// Make a photography page to show off photographs I have taken
// Add a git repos section
// Make a videography section
// Update about me from the placeholder
// Update technical skills section from placeholder
// Add Favicon and polish UI theme and icons
// 
// 
// 