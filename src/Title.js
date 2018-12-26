import React from 'react';

export class Title extends React.Component {
    render() {
        var inlineCss = {
            padding: '10px',
            lineHeight: '16px',
            color: 'orange',
            float: 'left',
            width: '100%'
        };

        return (
            <div>
                <div className="flyin-widget">
                    <h1 style={inlineCss}>Iks Oks</h1>
                </div>
            </div>
        )
    }
}
