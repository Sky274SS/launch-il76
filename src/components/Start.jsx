import React , {useState} from 'react'
import Panel from './Panel'


const Start = ()=>{
 

    const [state,setState] = useState({
        isOpen:true,
        isConf:false,
        isMenu:false,
        isFirstPilotPanel:false,
        isSecondPilotPanel:false,
        isCenterPanel:false,
        isOverheadPanel:false,
        isBottomPanel:false

    })


    return (
<div>
        {state.isOpen && <div className="start">
            <button className="button" onClick={()=> setState({...state,isOpen:false, isConf:true}) }>
                Начать
            </button>

        </div>}
        {
            state.isConf && <div className="confirm">
                <div className="confirm-window">
                    <div className="scroll">
                    <h2>Правила использования данного приложения</h2>
                    <p>Здесь будет какой-то текст</p>
                        </div> 
            <button className="button" onClick={()=> setState({...state,isConf:false,isMenu:true})}>
                Далее
            </button>
            </div>
        </div>
        }

        {state.isMenu && <div className="back">
         <div className="menu">
            <div className="menu-header">
                <div className="menu-button overhead-panel"onClick={()=> 
                    setState({...state,
                    isOverheadPanel:true,
                    isFirstPilotPanel:false,
                    isCenterPanel:false,
                    isSecondPilotPanel:false,
                    isBottomPanel:false,
                    })}/>
                <div className="menu-button first-pilot-panel" onClick={()=> 
                    setState({...state,
                    isOverheadPanel:false,
                    isFirstPilotPanel:true,
                    isCenterPanel:false,
                    isSecondPilotPanel:false,
                    isBottomPanel:false,
                    })}/>
                <div className="menu-button center-panel"onClick={()=> 
                    setState({...state,
                    isOverheadPanel:false,
                    isFirstPilotPanel:false,
                    isCenterPanel:true,
                    isSecondPilotPanel:false,
                    isBottomPanel:false,
                    })}/>
                <div className="menu-button second-pilot-panel" onClick={()=> 
                    setState({...state,
                    isOverheadPanel:false,
                    isFirstPilotPanel:false,
                    isCenterPanel:false,
                    isSecondPilotPanel:true,
                    isBottomPanel:false,
                    })}/>
                    <div className="menu-button bottom-panel"onClick={()=> 
                    setState({...state,
                    isOverheadPanel:false,
                    isFirstPilotPanel:false,
                    isCenterPanel:false,
                    isSecondPilotPanel:false,
                    isBottomPanel:true,
                    })}/>
                <div className="menu-button">Левый пульт управления</div>
                <div className="menu-button">Правый пульт управления</div>
                <div className="menu-info" onClick={()=> 
                    setState({...state,
                    isOverheadPanel:false,
                    isFirstPilotPanel:false,
                    isCenterPanel:false,
                    isSecondPilotPanel:false,
                    isBottomPanel:false,
                    })}>

                </div>
            </div>
            </div>
            <Panel 
            isFirstPilotPanel={state.isFirstPilotPanel} 
            isSecondPilotPanel={state.isSecondPilotPanel}
            isCenterPanel={state.isCenterPanel}
            isOverheadPanel={state.isOverheadPanel}
            isBottomPanel={state.isBottomPanel}
            />
        </div>
        }
        
 
    </div>   

    )
}

export default Start