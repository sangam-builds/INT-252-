import { useState, useEffect, useCallback } from 'react'
// import './App.css'

export default function App() {

  // const [display, setDisplay] = useState('0')
  // const [equation, setEquation] = useState('')
  // const [prevValue, setPrevValue] = useState(null)
  // const [operator, setOperator] = useState(null)
  // const [waitingForOperand, setWaitingForOperand] = useState(false)
  // const [history, setHistory] = useState(() => {
  //   try {
  //     const saved = localStorage.getItem('calc_history')
  //     return saved ? JSON.parse(saved) : []
  //   } catch {
  //     return []
  //   }
  // })
  // const [showHistory, setShowHistory] = useState(false)
  // const [theme, setTheme] = useState(() => {
  //   return localStorage.getItem('calc_theme') || 'dark'
  // })
  // const [scientificMode, setScientificMode] = useState(false)
  // const [copied, setCopied] = useState(false)

  // // Sync theme
  // useEffect(() => {
  //   localStorage.setItem('calc_theme', theme)
  // }, [theme])

  // // Sync history
  // useEffect(() => {
  //   localStorage.setItem('calc_history', JSON.stringify(history))
  // }, [history])

  // // Precision helper to prevent floating-point artifacts like 0.1 + 0.2 = 0.30000000000000004
  // const formatResult = (value) => {
  //   if (isNaN(value) || !isFinite(value)) return 'Error'
  //   const rounded = Math.round(value * 1e12) / 1e12
  //   return String(rounded)
  // }

  // // Calculate binary operation
  // const calculate = useCallback((firstVal, secondVal, op) => {
  //   switch (op) {
  //     case '+':
  //       return firstVal + secondVal
  //     case '-':
  //       return firstVal - secondVal
  //     case '×':
  //     case '*':
  //       return firstVal * secondVal
  //     case '÷':
  //     case '/':
  //       if (secondVal === 0) return 'Error'
  //       return firstVal / secondVal
  //     default:
  //       return secondVal
  //   }
  // }, [])

  // // Input numbers
  // const inputDigit = useCallback((digit) => {
  //   if (display === 'Error') {
  //     setDisplay(digit)
  //     setWaitingForOperand(false)
  //     return
  //   }

  //   if (waitingForOperand) {
  //     setDisplay(digit)
  //     setWaitingForOperand(false)
  //   } else {
  //     if (display === '0' && digit !== '.') {
  //       setDisplay(digit)
  //     } else if (display.length < 15) {
  //       setDisplay((prev) => prev + digit)
  //     }
  //   }
  // }, [display, waitingForOperand])

  // // Input decimal
  // const inputDecimal = useCallback(() => {
  //   if (display === 'Error' || waitingForOperand) {
  //     setDisplay('0.')
  //     setWaitingForOperand(false)
  //     return
  //   }

  //   if (!display.includes('.')) {
  //     setDisplay((prev) => prev + '.')
  //   }
  // }, [display, waitingForOperand])

  // // Clear all
  // const clearAll = useCallback(() => {
  //   setDisplay('0')
  //   setEquation('')
  //   setPrevValue(null)
  //   setOperator(null)
  //   setWaitingForOperand(false)
  // }, [])

  // // Backspace
  // const handleBackspace = useCallback(() => {
  //   if (display === 'Error' || waitingForOperand) {
  //     setDisplay('0')
  //     setWaitingForOperand(false)
  //     return
  //   }

  //   if (display.length > 1) {
  //     if (display.length === 2 && display.startsWith('-')) {
  //       setDisplay('0')
  //     } else {
  //       setDisplay(display.slice(0, -1))
  //     }
  //   } else {
  //     setDisplay('0')
  //   }
  // }, [display, waitingForOperand])

  // // Toggle plus/minus sign
  // const toggleSign = useCallback(() => {
  //   if (display === 'Error' || display === '0') return
  //   setDisplay((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev))
  // }, [display])

  // // Percentage calculation
  // const handlePercentage = useCallback(() => {
  //   if (display === 'Error') return
  //   const current = parseFloat(display)
  //   if (isNaN(current)) return

  //   let result
  //   if (prevValue !== null && operator) {
  //     // Percentage of prevValue (e.g. 200 + 10% = 200 + 20)
  //     result = (prevValue * current) / 100
  //   } else {
  //     result = current / 100
  //   }
  //   setDisplay(formatResult(result))
  // }, [display, prevValue, operator])

  // // Operator handling (+, -, ×, ÷)
  // const performOperation = useCallback((nextOperator) => {
  //   if (display === 'Error') return
  //   const inputValue = parseFloat(display)

  //   if (prevValue === null) {
  //     setPrevValue(inputValue)
  //     setEquation(`${inputValue} ${nextOperator}`)
  //   } else if (operator) {
  //     if (waitingForOperand) {
  //       // Just change operator if clicked another one
  //       setOperator(nextOperator)
  //       setEquation(`${prevValue} ${nextOperator}`)
  //       return
  //     }

  //     const computed = calculate(prevValue, inputValue, operator)
  //     if (computed === 'Error') {
  //       setDisplay('Error')
  //       setPrevValue(null)
  //       setOperator(null)
  //       setEquation('')
  //       setWaitingForOperand(true)
  //       return
  //     }

  //     const formatted = formatResult(computed)
  //     setDisplay(formatted)
  //     setPrevValue(Number(formatted))
  //     setEquation(`${formatted} ${nextOperator}`)
  //   }

  //   setWaitingForOperand(true)
  //   setOperator(nextOperator)
  // }, [display, prevValue, operator, waitingForOperand, calculate])

  // // Equals (=)
  // const handleEquals = useCallback(() => {
  //   if (display === 'Error' || operator === null || prevValue === null) return
  //   const inputValue = parseFloat(display)

  //   const computed = calculate(prevValue, inputValue, operator)
  //   if (computed === 'Error') {
  //     setDisplay('Error')
  //     setPrevValue(null)
  //     setOperator(null)
  //     setEquation('')
  //     setWaitingForOperand(true)
  //     return
  //   }

  //   const formatted = formatResult(computed)
  //   const equationStr = `${prevValue} ${operator} ${inputValue}`

  //   // Add to history
  //   setHistory((prev) => [
  //     {
  //       id: Date.now(),
  //       equation: equationStr,
  //       result: formatted,
  //       timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  //     },
  //     ...prev.slice(0, 19) // keep recent 20
  //   ])

  //   setDisplay(formatted)
  //   setEquation(`${equationStr} =`)
  //   setPrevValue(null)
  //   setOperator(null)
  //   setWaitingForOperand(true)
  // }, [display, operator, prevValue, calculate])

  // // Scientific functions
  // const handleScientific = useCallback((fn) => {
  //   if (display === 'Error') return
  //   const val = parseFloat(display)
  //   if (isNaN(val)) return

  //   let result
  //   let eq = ''

  //   switch (fn) {
  //     case 'sqrt':
  //       if (val < 0) {
  //         setDisplay('Error')
  //         return
  //       }
  //       result = Math.sqrt(val)
  //       eq = `√(${val})`
  //       break
  //     case 'sqr':
  //       result = val * val
  //       eq = `sqr(${val})`
  //       break
  //     case 'recip':
  //       if (val === 0) {
  //         setDisplay('Error')
  //         return
  //       }
  //       result = 1 / val
  //       eq = `1/(${val})`
  //       break
  //     case 'pi':
  //       result = Math.PI
  //       eq = 'π'
  //       break
  //     default:
  //       return
  //   }

  //   const formatted = formatResult(result)
  //   setDisplay(formatted)
  //   setEquation(eq)
  //   setWaitingForOperand(true)
  // }, [display])

  // // Copy result to clipboard
  // const copyToClipboard = () => {
  //   if (display === 'Error') return
  //   navigator.clipboard?.writeText(display)
  //   setCopied(true)
  //   setTimeout(() => setCopied(false), 1500)
  // }

  // // Keyboard navigation support
  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     // Don't capture when typing in other inputs if any
  //     if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return

  //     if (e.key >= '0' && e.key <= '9') {
  //       e.preventDefault()
  //       inputDigit(e.key)
  //     } else if (e.key === '.') {
  //       e.preventDefault()
  //       inputDecimal()
  //     } else if (e.key === '+') {
  //       e.preventDefault()
  //       performOperation('+')
  //     } else if (e.key === '-') {
  //       e.preventDefault()
  //       performOperation('-')
  //     } else if (e.key === '*') {
  //       e.preventDefault()
  //       performOperation('×')
  //     } else if (e.key === '/') {
  //       e.preventDefault()
  //       performOperation('÷')
  //     } else if (e.key === 'Enter' || e.key === '=') {
  //       e.preventDefault()
  //       handleEquals()
  //     } else if (e.key === 'Backspace') {
  //       e.preventDefault()
  //       handleBackspace()
  //     } else if (e.key === 'Escape' || e.key.toLowerCase() === 'c') {
  //       e.preventDefault()
  //       clearAll()
  //     } else if (e.key === '%') {
  //       e.preventDefault()
  //       handlePercentage()
  //     }
  //   }

  //   window.addEventListener('keydown', handleKeyDown)
  //   return () => window.removeEventListener('keydown', handleKeyDown)
  // }, [inputDigit, inputDecimal, performOperation, handleEquals, handleBackspace, clearAll, handlePercentage])

  // // Dynamic font sizing based on digit length
  // const getDisplayFontSize = () => {
  //   const len = display.length
  //   if (len > 12) return '1.5rem'
  //   if (len > 9) return '1.9rem'
  //   if (len > 7) return '2.35rem'
  //   return '2.75rem'
  // }

  // return (
  //   <div className="calc-app-wrapper" data-theme={theme}>
  //     <div className={`calculator ${scientificMode ? 'scientific-mode' : ''}`}>
        
  //       {/* Top Header */}
  //       <div className="calc-header">
  //         <div className="calc-title">
  //           <span className="calc-title-icon">⚡</span>
  //           <span>Calc Pro</span>
  //         </div>

  //         <div className="calc-actions">
  //           {/* Scientific Mode Toggle */}
  //           <button
  //             className={`header-btn ${scientificMode ? 'active' : ''}`}
  //             onClick={() => setScientificMode((prev) => !prev)}
  //             title="Toggle Scientific Mode"
  //             aria-label="Toggle Scientific Functions"
  //           >
  //             ƒx
  //           </button>

  //           {/* History Toggle */}
  //           <button
  //             className={`header-btn ${showHistory ? 'active' : ''}`}
  //             onClick={() => setShowHistory((prev) => !prev)}
  //             title="History"
  //             aria-label="View Calculation History"
  //           >
  //             🕒
  //             {history.length > 0 && (
  //               <span className="history-badge">{history.length}</span>
  //             )}
  //           </button>

  //           {/* Theme Toggle */}
  //           <button
  //             className="header-btn"
  //             onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
  //             title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
  //             aria-label="Toggle Theme"
  //           >
  //             {theme === 'dark' ? '☀️' : '🌙'}
  //           </button>
  //         </div>
  //       </div>

  //       {/* Display Screen */}
  //       <div className="calc-display">
  //         <div className="calc-display-top">
  //           <div className="calc-equation">{equation || '\u00A0'}</div>
  //           <button
  //             className={`copy-btn ${copied ? 'copied' : ''}`}
  //             onClick={copyToClipboard}
  //             title="Copy to clipboard"
  //             aria-label="Copy result"
  //           >
  //             {copied ? '✓ Copied' : '⧉ Copy'}
  //           </button>
  //         </div>
  //         <div
  //           className="calc-main-value"
  //           style={{ fontSize: getDisplayFontSize() }}
  //         >
  //           {display}
  //         </div>
  //       </div>

  //       {/* Scientific Panel */}
  //       {scientificMode && (
  //         <div className="scientific-grid">
  //           <button className="calc-btn btn-scientific" onClick={() => handleScientific('sqrt')}>√x</button>
  //           <button className="calc-btn btn-scientific" onClick={() => handleScientific('sqr')}>x²</button>
  //           <button className="calc-btn btn-scientific" onClick={() => handleScientific('recip')}>¹/x</button>
  //           <button className="calc-btn btn-scientific" onClick={() => handleScientific('pi')}>π</button>
  //           <button className="calc-btn btn-scientific" onClick={toggleSign}>±</button>
  //         </div>
  //       )}

  //       {/* Standard Keypad Grid */}
  //       <div className="calc-grid">
  //         {/* Row 1 */}
  //         <button className="calc-btn btn-clear" onClick={clearAll} aria-label="Clear All">
  //           AC
  //         </button>
  //         <button className="calc-btn btn-action" onClick={handleBackspace} aria-label="Backspace">
  //           ⌫
  //         </button>
  //         <button className="calc-btn btn-action" onClick={handlePercentage} aria-label="Percent">
  //           %
  //         </button>
  //         <button
  //           className={`calc-btn btn-operator ${operator === '÷' && waitingForOperand ? 'active' : ''}`}
  //           onClick={() => performOperation('÷')}
  //           aria-label="Divide"
  //         >
  //           ÷
  //         </button>

  //         {/* Row 2 */}
  //         <button className="calc-btn btn-number" onClick={() => inputDigit('7')}>7</button>
  //         <button className="calc-btn btn-number" onClick={() => inputDigit('8')}>8</button>
  //         <button className="calc-btn btn-number" onClick={() => inputDigit('9')}>9</button>
  //         <button
  //           className={`calc-btn btn-operator ${operator === '×' && waitingForOperand ? 'active' : ''}`}
  //           onClick={() => performOperation('×')}
  //           aria-label="Multiply"
  //         >
  //           ×
  //         </button>

  //         {/* Row 3 */}
  //         <button className="calc-btn btn-number" onClick={() => inputDigit('4')}>4</button>
  //         <button className="calc-btn btn-number" onClick={() => inputDigit('5')}>5</button>
  //         <button className="calc-btn btn-number" onClick={() => inputDigit('6')}>6</button>
  //         <button
  //           className={`calc-btn btn-operator ${operator === '-' && waitingForOperand ? 'active' : ''}`}
  //           onClick={() => performOperation('-')}
  //           aria-label="Subtract"
  //         >
  //           −
  //         </button>

  //         {/* Row 4 */}
  //         <button className="calc-btn btn-number" onClick={() => inputDigit('1')}>1</button>
  //         <button className="calc-btn btn-number" onClick={() => inputDigit('2')}>2</button>
  //         <button className="calc-btn btn-number" onClick={() => inputDigit('3')}>3</button>
  //         <button
  //           className={`calc-btn btn-operator ${operator === '+' && waitingForOperand ? 'active' : ''}`}
  //           onClick={() => performOperation('+')}
  //           aria-label="Add"
  //         >
  //           +
  //         </button>

  //         {/* Row 5 */}
  //         <button className="calc-btn btn-action" onClick={toggleSign} aria-label="Negate">
  //           ±
  //         </button>
  //         <button className="calc-btn btn-number" onClick={() => inputDigit('0')}>0</button>
  //         <button className="calc-btn btn-number" onClick={inputDecimal} aria-label="Decimal point">
  //           .
  //         </button>
  //         <button className="calc-btn btn-equals" onClick={handleEquals} aria-label="Equals">
  //           =
  //         </button>
  //       </div>

  //       {/* History Drawer */}
  //       {showHistory && (
  //         <div className="history-drawer">
  //           <div className="history-header">
  //             <div className="history-title">
  //               <span>🕒 Calculation History</span>
  //             </div>
  //             <button
  //               className="header-btn"
  //               onClick={() => setShowHistory(false)}
  //               title="Close History"
  //               aria-label="Close History"
  //             >
  //               ✕
  //             </button>
  //           </div>

  //           {history.length === 0 ? (
  //             <div className="history-empty">
  //               <span style={{ fontSize: '2rem' }}>📝</span>
  //               <p>No calculations yet</p>
  //             </div>
  //           ) : (
  //             <div className="history-list">
  //               {history.map((item) => (
  //                 <div
  //                   key={item.id}
  //                   className="history-item"
  //                   onClick={() => {
  //                     setDisplay(item.result)
  //                     setEquation(item.equation)
  //                     setWaitingForOperand(true)
  //                     setShowHistory(false)
  //                   }}
  //                   title="Click to load this value into calculator"
  //                 >
  //                   <div className="history-equation">{item.equation}</div>
  //                   <div className="history-result">{item.result}</div>
  //                 </div>
  //               ))}
  //             </div>
  //           )}

  //           <div className="history-footer">
  //             {history.length > 0 && (
  //               <button
  //                 className="clear-history-btn"
  //                 onClick={() => setHistory([])}
  //               >
  //                 🗑️ Clear All
  //               </button>
  //             )}
  //           </div>
  //         </div>
  //       )}

  //     </div>

  //     {/* Keyboard Shortcuts Helper */}
  //     <div className="keyboard-hint">
  //       <span>💡 Keyboard supported:</span>
  //       <kbd>0-9</kbd>
  //       <kbd>+ - * /</kbd>
  //       <kbd>Enter</kbd>
  //       <kbd>Esc</kbd>
  //     </div>
  //   </div>

  
  // )

  return(
    <div>
      <h1>My React App</h1>
      <h2>Welcome students</h2>
    </div>
  )
}
