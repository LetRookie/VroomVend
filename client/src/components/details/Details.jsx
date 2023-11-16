import './details.css';

export default function Details() {
    return (
        <div class="slide-wrapper">

            <div class="slide-container">

                <input type="radio" name="slider" id="slide-1-trigger" class="trigger" />
                <label class="btn" for="slide-1-trigger"></label>
                <input type="radio" name="slider" id="slide-2-trigger" class="trigger" />
                <label class="btn" for="slide-2-trigger"></label>
                <input type="radio" name="slider" id="slide-3-trigger" class="trigger" />
                <label class="btn" for="slide-3-trigger"></label>
                <input type="radio" name="slider" id="slide-4-trigger" class="trigger" />
                <label class="btn" for="slide-4-trigger"></label>


                <div class="slide-wrapper">
                    <div id="slide-role">
                        <div class="slide slide-1"></div>
                        <div class="slide slide-2"></div>
                        <div class="slide slide-3"></div>
                        <div class="slide slide-4"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}