import React from "react";

const WidgetListContainer = () =>
    <div class="heading-widget">
        <div>
            <h2>Heading widget</h2>
            <input
                class="form-control"
                id="heading-text"
                type="text"
                placeholder="Heading text"
            />
                <select class="form-control wbdv-field wbdv-dob"
                        id="heading-type">
                    <option slected value="Heading-1">Heading 1</option>
                    <option value="Heading-2">Heading 2</option>
                    <option value="Heading-3">Heading 3</option>
                </select>
                <input
                        class="form-control"
                        id="widget-name"
                        type="text"
                        placeholder="Widget name"
                    />
                        <h3>Preview</h3>
                        <h1>Heading text</h1>
        </div>
    </div>

export default WidgetListContainer

