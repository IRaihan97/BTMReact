import { Animator, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, ZoomIn } from "react-scroll-motion"

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn(), FadeOut())
const FadeUp = batch(Fade(), Sticky(), Move())

const Home = () => {
    return(
        <ScrollContainer>
            <ScrollPage page={0}>
                <Animator animation={batch(Sticky(), Fade(), MoveOut())}>
                    <h2>BTM Example 1</h2>
                </Animator>
            </ScrollPage>

            <ScrollPage page={1}>
                <Animator animation={ZoomInScrollOut}>
                    <h2>BTM Example 2</h2>
                </Animator>
            </ScrollPage>

            <ScrollPage page={2}>
                <Animator animation={FadeUp}>
                    <h2>BTM Example 3</h2>
                </Animator>
            </ScrollPage>

            <ScrollPage page={3}>
                <div className="section-3">
                    <h2>
                    <Animator animation={MoveIn(-1000, 0)}>
                            BTM Example 4
                        </Animator>
                        <Animator animation={MoveIn(1000,0)}>
                            BTM Example 5
                        </Animator>
                        <Animator animation={MoveOut(1000,0)}>
                            BTM Example 6
                        </Animator>
                        <Animator animation={MoveOut(-1000,0)}>
                            BTM Example 7
                        </Animator>
                    </h2>
                </div>
                
            </ScrollPage>

            <ScrollPage page={4}>
                <div className="section-3">
                    <h2>
                        <Animator animation={MoveIn(-1000, 0)}>
                            BTM Example 4
                        </Animator>
                        <Animator animation={MoveIn(1000,0)}>
                            BTM Example 5
                        </Animator>
                        <Animator animation={MoveIn(1000,0)}>
                            BTM Example 6
                        </Animator>
                        <Animator animation={MoveIn(-1000,0)}>
                            BTM Example 7
                        </Animator>
                    </h2>
                </div>
                
            </ScrollPage>

            

            

            
        </ScrollContainer>
    )
}

export default Home