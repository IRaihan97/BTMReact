import { Animator, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, ZoomIn } from "react-scroll-motion"
import React from 'react';
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn(), FadeOut())
const FadeUp = batch(Fade(), Sticky(), Move())


const OurServices = () => {
    return(
        <ScrollContainer>
            <ScrollPage page={0}>
                <Animator animation={batch(Sticky(), Fade(), MoveOut())}>
                    <h2>BTM Example 1</h2>
                </Animator>
            </ScrollPage>
            <ScrollPage page={1}>
                <Animator animation={ZoomInScrollOut}>
                    <h2>
                        To bridge the gap between industry and academia through innovative IT & Data Science services. Unlike most of our competition, we are not a profit-driven organisation. Rather, we are a marketplace, that aims to foster symbiotic relations between our customers and the university. We are distinguishable by our bank of both talented students as well as staff-leading specialists.
                    </h2>
                </Animator>
            </ScrollPage>
            <ScrollPage page={2}>
                <Animator animation={FadeUp}>
                    <h2>BTM Example 3</h2>
                </Animator>
            </ScrollPage>
            
        </ScrollContainer>
    )
}

export default OurServices;