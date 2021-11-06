import React from 'react'
import Position from './Position'

const Panel = (props)=>{
    
    return(
        <div>
            {props.isFirstPilotPanel&&
            <div className="panel panel-first-pilot"/>
            }
            {props.isSecondPilotPanel&&
            <div className="panel panel-second-pilot"/>
            }
            {props.isCenterPanel&&
            <div className="panel panel-center"/>
            }
            {props.isOverheadPanel&&
            <div className="panel panel-overhead" onClick={(e)=>{console.log(`x: ${e.pageX}  y: ${e.pageY}`)}}>
                <Position x={499} y={650}>
                    <div className="check">

                    </div>
                </Position>
            </div>
            }
            {props.isBottomPanel&&
            <div className="panel panel-bottom"/>
            }
        </div>
    )
}

export default Panel