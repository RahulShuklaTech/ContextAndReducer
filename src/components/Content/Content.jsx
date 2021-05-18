import { useContext } from "react";
import CounterContext from "../../contexts/CounterContext";
import "./Content.css";
const Content = () => {

    const { state, dispatch } = useContext(CounterContext);

    return (
        <div className="content">
            <h1>Content</h1>
            <div className="counter">
                <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
                <div className="number">{state.counter}</div>
                <button onClick={() => dispatch({ type: "Increment" })}>+</button>
                <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
            </div>
            <div class ="story"> 
                I want to tell you a story about a taco, and also tell you a thing about Tim Duncan. First, though, let me tell you about a bus.

                My father drove a city bus in San Antonio for 34 years. It’s the only job I can remember him ever having. It’s a part of the memory package I have for him in my head. The attire changes—there was a period of time when his uniform was brown-based (dark brown pants and a tan short-sleeve button-up shirt); and there was a period of time when his uniform was blue-based (dark blue pants and a light blue short-sleeve button-up shirt); and also there was even a very brief period when he was allowed to wear jeans to work—but the job is always the same. It’s him and the bus. For decades, literally. And well over a million miles, literally.

                For a few months in the mid-’90s, his route took him through the neighborhood where we lived. It was an excellent time for me. I was very proud. I’d be outside with my friends and we’d be playing basketball or football or participating in unsanctioned boxing matches in someone’s front yard and the bus would cruise by and someone would go, “Look! It’s Shea’s dad!” Then we’d watch for a second as he rode by. It was the closest I ever got to being Neighborhood Famous.
                Ringer Coverage of the 2020 HOF Honorees

                Celebrating the careers and legacies of the 2020 inductees into the Basketball Hall of Fame

                Sometimes, on a summer day when things worked out exactly right, we’d catch the bus and ride around with him for 10 minutes, 20 minutes, 30 minutes during the afternoon. He taught me all kinds of stuff about the bus, and about bus driving.

                For example, experienced bus drivers do this thing where, when they’re gonna turn a corner in an area that has a lot of foot traffic, they’ll tap the horn. Just one little bap. Real quick. Bap. Not enough that you get the full strength of the horn, which is very loud and intimidating, but enough that you can hear it. Bap. They do it as a way to announce the bus to people who might not be looking for it.

                Or another thing: Did you know that buses have kill switches on them? They do. It’s a security measure. There are occasional stops on a route where the driver will have, say, a four- or five-minute break. And when that happens, the driver might want to step off the bus for a minute. And when they do that, they like to leave the bus running. Which is why you need the kill switch. It’s this one tiny thing that, if you don’t know where it is and you don’t know that you have to push it, then the bus won’t go anywhere or do anything. You can sit in that driver’s seat and mash on the gas all you want. But nothing will happen. It won’t move an inch.

                Or another thing: The primary bus garage in San Antonio is downtown. And so if you’re driving that first shift in the morning, what you have to do is you have to go to the garage, clock in, get your bus, and then head to your route from there. But your shift (usually) won’t take you back to the garage at the end. What’ll (usually) happen is your shift will end with you dropped off at a park and ride, at which point another driver will take over your bus. And so then you have to catch a series of buses to get back to the garage, which is a wildly inconvenient way to end your day.

                There’s a hack to the system, though. What the drivers do is they partner up with another driver. They find out ahead of time who is scheduled to relieve them at the park and ride. And then they make an arrangement: The driver who is getting relieved will take the person’s car who’s just relieved them and drive it back to the garage. Then they’ll park it there and leave the keys in a designated place. And so, rather than catch the various buses back to the garage (which can take upward of an hour and a half) the driver who was relieved gets to drive himself back to the garage, which is where he parked his car that morning when he got to work (it might take 15 minutes to drive yourself from the park and ride to the garage). So the relieved driver gets to get home much faster, and the other driver, who drove his car to the park and ride to start his shift, knows that his car will be waiting for him when he takes the bus back to the garage that night.
            </div>
        </div>

    )
}

export default Content;