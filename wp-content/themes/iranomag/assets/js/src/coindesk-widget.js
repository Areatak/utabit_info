/**
 * Created by root on 5/23/17.
 */
var CoinDeskWidget=function(){var a=this;a._oldIE=document.all&&!document.addEventListener,a._protocol=window.location.protocol,a._tickerUrl=a._protocol+"//widget.coindesk.com/bpiticker",a.initialize=function(){return"theantimedia.org"===location.hostname?void console.warn("The widget has been disabled on your domain. Please contact index@coindesk.com for more details."):(a._widget=document.getElementById("coindesk-widget"),null===a._widget?void console.warn('Please ensure you have included the tag where you want the widget to appear. Use the markup: <div id="coindesk-widget"></div>'):(a._widget.layout=a._widget.getAttribute("data-size"),a._widget.layout||console.warn("No layout specified by attribute 'data-size', defaulting to 'small'. Supports 'mpu'(300x250) and 'small'(210x130). For example: <div id=\"coindesk-widget\" data-size=\"mpu\"></div>"),a._widget.alignment=a._widget.getAttribute("data-align"),a._widget.alignment||console.warn("No alignment specified by attribute 'data-align', defaulting to 'left'. Supports 'left', 'center' and 'right'."),a.getDimensions(a._widget.layout),a.getAlignment(a._widget.alignment),a.createTemplate(),a.createWidget(),a.getHistoryData(),void a.getCurrentData()))},a.createTemplate=function(){var b,c,d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAVFBMVEUAAAD+vhL+vhL+vhL+vhL+vhL+vhL+vhL+vhL+vhL+vhL////+vhL+zk3/78T/9+H+xjD+yj7/89P/56b/+/D+1mv+wiH/45f/34n+2nr/67X+0lyhkP7iAAAAC3RSTlMAEL/PcCCPMK/vQNeqw9EAAAD6SURBVHhefZNJlsMgDAUJwaPE7DF9/3s2xEYoLFwbFsXTFyAE0Sk5YWKSqhMtw4iMcfi1PTb0rypfbxLE+8Xtg2f2E91WfZu7AeBiKT/boThrjhOMB9KY+y8ncpCxASJpKUSHBR/hIrriO6GQ+EvqCMkv/tZKyKp3AIOok/9Q9anqAHCkxeRdN+LnVBC1XvNCmkcXFl81j7bfzmBF0m20zhtcq7cz19Z3xklaXvqETM48WHVZrmVfrqaMBVZc1Uv1AQp7vVQx1tZ0gGCMOdmTiIG/NThkzGwctnX1YLnt21Fzvhm251F8HmTyT98gM0su5UyCfcHL8S/4D3L7I3j7U/aqAAAAAElFTkSuQmCC",e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAXVBMVEUAAAD+vhL+vhL+vhL+vhL+vhL+vhL+vhL+vhL+vhL+vhL+vhL+vhL+vhL////+vhL/34n+0lz/78T/9+H+zk3/89P+wiH+yj7/67X/56b+1mv/+/D+xjD+2nr/45cPEa9LAAAADnRSTlMAzxBAv2CPr5/vIDDfUP1vqD4AAAFgSURBVHhehZRZksMgDAXBMfGS5InNe5L7H3Nq7EwQ2Iz7u0slCfFERKFqSSuyVoXIcakoorocayXtKA/UKx1yTRooJGWQkXm7U5bmxurF3jMxQ00Ze3BzJMvieI4ZMAPczCb67CU4XnuiCehfgKfAtiW2vzcA69DRCBCjTAqSxYZbYImSkvzdetPhj4nPUwlRUIQHgAUrmpmtULGoATga3qv7CqISdSxaABMRDb+mC2KdLJsAYP4sgE8uxUGL6xQOwEIBsW8Ri9XarYPnRQtG1+fFtc64MI+L+xa3vdu8qL87GdfxuSj56bjvBD55GskW3gGhjE7EOjyhx8YyamMmANFJqnAUz3lyiHAUaOMzG8DgBcvkcA1gDDYs8+ix/wr9DHhKkOnn6tDRBFDKZRc73pCDTb3rcfB4n42foqF/aFoWUs1pSJ3HXpsE5GmQnkfzediXD5GjVdWn2Xul4uZ+AHp5TDd9jCYnAAAAAElFTkSuQmCC",f="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCBtZWV0JyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJz48ZyBpZD0nZzE2JyB0cmFuc2Zvcm09J3NjYWxlKDAuMDE1NjI1KSc+PHBhdGggaWQ9J2NvaW4nIGZpbGw9JyNGRUJFMTInIGQ9J00zMjI3NC4zOTEsMjAzNDcuMzc1Yy0yMTg4LjMxMiw4Nzc3LjI1LTExMDc4LjE4OCwxNDExOC45MzgtMTk4NTYuMzc1LDExOTMwLjEyNQlDMzY0My4zMjgsMzAwODkuMTg4LTE2OTguMzU5LDIxMTk4Ljg3NSw0OTAuOTUzLDEyNDIyLjE1NkMyNjc4LjIwMywzNjQzLjkwNiwxMTU2OC4wNzgtMTY5OC4zMTIsMjAzNDMuNzY2LDQ5MAlDMjkxMjEuNDUzLDI2NzguMjgxLDM0NDYyLjY0MSwxMTU2OS42NTYsMzIyNzQuMzkxLDIwMzQ3LjM3NUwzMjI3NC4zOTEsMjAzNDcuMzc1eicvPjxwYXRoIGlkPSdzeW1ib2wnIGZpbGw9JyNGRkZGRkYnIGQ9J00yMzYwMy42NDEsMTQwNDkuNzgxYzMyNi4xMjUtMjE4MC4wOTQtMTMzMy43NS0zMzUyLjA2Mi0zNjAzLjQzOC00MTMzLjg3NWw3MzYuMjUtMjk1My4yMTkJbC0xNzk3LjYyNS00NDhsLTcxNi44MTIsMjg3NS4zNzVjLTQ3Mi41NjItMTE3Ljc1LTk1Ny45MzgtMjI4Ljg0NC0xNDQwLjI1LTMzOC45MzhsNzIxLjkzOC0yODk0LjMxMmwtMTc5Ni42MjUtNDQ4TDE0OTcwLjMyOCw4NjYxCWMtMzkxLjE4OC04OS4wOTQtNzc1LjE4OC0xNzcuMTU2LTExNDcuOTM4LTI2OS44NDRsMi4wNjItOS4yMTlsLTI0NzkuMTI1LTYxOWwtNDc4LjE4OCwxOTIwYzAsMCwxMzMzLjc1LDMwNS42ODgsMTMwNS42MjUsMzI0LjYyNQljNzI4LjA2MiwxODEuNzUsODU5LjYyNSw2NjMuNTMxLDgzNy42MjUsMTA0NS41bC04MzguNjg4LDMzNjQuMzQ0YzUwLjE4OCwxMi44MTIsMTE1LjE4OCwzMS4yMTksMTg2Ljg3NSw1OS45MDYJYy01OS44NzUtMTQuODQ0LTEyMy44NzUtMzEuMjUtMTg5LjkzOC00Ny4wOTRsLTExNzUuNTYyLDQ3MTIuOTA2Yy04OS4wNjIsMjIxLjI1LTMxNC44NzUsNTUzLTgyMy44MTIsNDI3LjA2MgljMTcuOTM4LDI2LjA2Mi0xMzA2LjYyNS0zMjYuMTg4LTEzMDYuNjI1LTMyNi4xODhsLTg5Mi4zNzUsMjA1Ny43NWwyMzM5LjMxMiw1ODMuMTg4CWM0MzUuMTg4LDEwOS4wNjIsODYxLjY4OCwyMjMuMTg4LDEyODEuNTYyLDMzMC43NWwtNzQzLjkzOCwyOTg3bDE3OTUuNTYyLDQ0OGw3MzYuNzUtMjk1NS4yNQljNDkwLjUsMTMzLjA2Miw5NjYuNjg4LDI1NiwxNDMyLjU2MiwzNzEuNjg4bC03MzQuMTg4LDI5NDEuNDM4bDE3OTcuNjI1LDQ0OGw3NDMuOTM4LTI5ODEuMzc1CWMzMDY1LjMxMiw1ODAuMDYyLDUzNzAuMzc1LDM0Ni4xMjUsNjM0MC42MjUtMjQyNi4zMTJjNzgxLjgxMi0yMjMyLjM3NS0zOC45MzgtMzUyMC0xNjUxLjc1LTQzNTkuNzUJQzIyNDgyLjg5MSwxNjQxOC4zMTIsMjMzNjcuNTc4LDE1NjQ1LjY4OCwyMzYwMy42NDEsMTQwNDkuNzgxTDIzNjAzLjY0MSwxNDA0OS43ODF6IE0xOTQ5Ni4zOTEsMTk4MDkuMjUJYy01NTUuNSwyMjMyLjM3NS00MzE0LjEyNSwxMDI1LjU2Mi01NTMyLjY4OCw3MjNsOTg3LjE4OC0zOTU3LjI1QzE2MTY5LjM5MSwxNjg3OS4xMjUsMjAwNzcuMDE2LDE3NDgxLjI1LDE5NDk2LjM5MSwxOTgwOS4yNXpNMjAwNTIuMzkxLDE0MDE3LjUzMWMtNTA2Ljg3NSwyMDMwLjU5NC0zNjM1LjE4OCw5OTguOTA2LTQ2NDkuOTM4LDc0Nmw4OTQuOTM4LTM1ODkuMTI1CUMxNzMxMi4yMDMsMTE0MjcuMzEyLDIwNTgwLjI2NiwxMTg5OS4zNzUsMjAwNTIuMzkxLDE0MDE3LjUzMXonLz48L2c+PC9zdmc+DQo=",g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAkFBMVEX9wgwAAAD+y0b+ykD9wgxGNwmDZgplTgr9wgz+y0ZEPSoJCQhzYTE5MyShhDixiAvutgyScQpVQwmifQvbsEGKcjXEnz2VezbywkTXqzS4ljzPnwvQqD9+aTN0WgoNDArAlA9bTy60kTLnuUMrIwtZRgutjTpKOwtnWC/9wxD+yTtQRizutw/AlAsYFQj+ykK0d/qAAAAABXRSTlOPAI+PELoY6a8AAAEeSURBVHhefdFHbsMwAERR2gl7Ue/Fvabd/3YZIYBDyTC1+JsHkgOIrN5+5KtvvSLrV4bcCQnpTZCgggP64N6dp7RStq6c0kMf3CulihJxDmkrpexW/LODqAExZsqHshvm8Rmyq5BhQIqr3ejEY1moXV4bZfIDUjdHzWOfy6GqZ5tB82lG5i6XSHMTEYvFchpqpDT2JATVzOf277RppdxfIiEy2vksnRny+btLPiz1+fL9TXzRzr/cn2Yv0yr+NK2EGtmcsKrjOBil82mtKerFKp+rj2vzyTWN41SncUf1uJhmj0xrnXKEUySZTcM/SiGUTvlGmMc9lEeQkSHZiEQe37csiUXEcGPGMiESBn2wt3kRElJwSMHroJIVCej7L2jCKiBh+vRwAAAAAElFTkSuQmCC",h="data:image/png;base64,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",i="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMjYuMjQgMTI2LjIzMicgcHJlc2VydmVBc3BlY3RSYXRpbz0neE1pZFlNaWQgbWVldCcgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJSc+PGc+PGc+PHBhdGggZmlsbD0nI0ZEQzIwQycgZD0nTTAsMTQuOTg2QzAsNi43NDQsNi43NDQsMCwxNC45ODYsMGg5Ni4yNjhjOC4yNDIsMCwxNC45ODYsNi43NDQsMTQuOTg2LDE0Ljk4NnY5Ni4yNmMwLDguMjQyLTYuNzQ0LDE0Ljk4Ni0xNC45ODYsMTQuOTg2SDE0Ljk4NkM2Ljc0NCwxMjYuMjMyLDAsMTE5LjQ4OCwwLDExMS4yNDZWMTQuOTg2eicvPjwvZz48cGF0aCBmaWxsPScjRkVDQjQ2JyBkPSdNMTExLjI5MywwLjAwMkgxNC45NDZDNi43MjIsMC4wMjUsMCw2Ljc1OCwwLDE0Ljk4NnY5Ni4yNmMwLDQuMDg4LDEuNjYxLDcuODAzLDQuMzM4LDEwLjUxNEwxMjEuNzY0LDQuMzM2QzExOS4wNjIsMS42NywxMTUuMzYzLDAuMDE0LDExMS4yOTMsMC4wMDJ6Jy8+PGc+PHBhdGggZmlsbD0nIzA5MDkwOCcgZD0nTTczLjM1MSw2OC44ODljLTIuNDYsMC00LjQ1NiwxLjk5OC00LjQ1Niw0LjQ2MWMwLDIuNDY3LDEuOTk2LDQuNDY3LDQuNDU2LDQuNDY3YzIuNDY2LDAsNC40Ny0yLDQuNDctNC40NjdDNzcuODIsNzAuODg3LDc1LjgxNiw2OC44ODksNzMuMzUxLDY4Ljg4OXonLz48cGF0aCBmaWxsPScjMDkwOTA4JyBkPSdNMzguNjU0LDg3LjQ0NWwtMTIuNjIxLDEyLjYyMWMxLjYyLDEuNjU2LDMuODc3LDIuNjg2LDYuMzc4LDIuNjg2YzQuOTMsMCw4LjkzLTMuOTk2LDguOTMtOC45MjhDNDEuMzQyLDkxLjMyLDQwLjMxMSw4OS4wNjIsMzguNjU0LDg3LjQ0NXonLz48cGF0aCBmaWxsPScjMDkwOTA4JyBkPSdNNTIuODgxLDc3LjgxNmMyLjQ2NiwwLDQuNDY0LTIsNC40NjQtNC40NjdjMC0xLjI2Ni0wLjUzNC0yLjQwNC0xLjM4MS0zLjIxNWwtNi4zLDYuMjk5QzUwLjQ3OCw3Ny4yODEsNTEuNjE1LDc3LjgxNiw1Mi44ODEsNzcuODE2eicvPjxwYXRoIGZpbGw9JyMwOTA5MDgnIGQ9J001Mi44ODUsODQuODk2Yy00LjkzNCwwLTguOTMzLDMuOTktOC45MzMsOC45MjhjMCw0LjkzMiwzLjk5OSw4LjkyOCw4LjkzMyw4LjkyOGM0LjkyOCwwLDguOTI1LTMuOTk2LDguOTI1LTguOTI4QzYxLjgxMSw4OC44ODcsNTcuODEzLDg0Ljg5Niw1Mi44ODUsODQuODk2eicvPjxwYXRoIGZpbGw9JyMwOTA5MDgnIGQ9J003My4zNTEsNTcuMzQ4YzIuNDY2LDAsNC40Ny0yLDQuNDctNC40NjNjMC0xLjI2OC0wLjUzNS0yLjQwNi0xLjM4Ni0zLjIyMWwtNi4yOTksNi4yOTdDNzAuOTQ3LDU2LjgxMiw3Mi4wODQsNTcuMzQ4LDczLjM1MSw1Ny4zNDh6Jy8+PHBhdGggZmlsbD0nIzA5MDkwOCcgZD0nTTkzLjgyNiw1Ny4zNDhjMi40NjYsMCw0LjQ2MS0yLDQuNDYxLTQuNDYzYzAtMi40NjUtMS45OTUtNC40NjktNC40NjEtNC40NjljLTIuNDY3LDAtNC40NjUsMi4wMDQtNC40NjUsNC40NjlDODkuMzYxLDU1LjM0OCw5MS4zNTksNTcuMzQ4LDkzLjgyNiw1Ny4zNDh6Jy8+PHBhdGggZmlsbD0nIzA5MDkwOCcgZD0nTTczLjM1MSw4NC44OTZjLTQuOTI3LDAtOC45MjQsMy45OS04LjkyNCw4LjkyOGMwLDQuOTMyLDMuOTk3LDguOTI4LDguOTI0LDguOTI4YzQuOTM2LDAsOC45My0zLjk5Niw4LjkzLTguOTI4QzgyLjI4LDg4Ljg4Nyw3OC4yODYsODQuODk2LDczLjM1MSw4NC44OTZ6Jy8+PHBhdGggZmlsbD0nIzA5MDkwOCcgZD0nTTEwMC4wNjcsMjYuMDMxTDg3LjQ0NSwzOC42NTJjMS42MjEsMS42NTgsMy44NzksMi42ODgsNi4zODEsMi42ODhjNC45MjgsMCw4LjkzLTMuOTk0LDguOTMtOC45MjZDMTAyLjc1NiwyOS45MTIsMTAxLjcyNSwyNy42NTIsMTAwLjA2NywyNi4wMzF6Jy8+PHBhdGggZmlsbD0nIzA5MDkwOCcgZD0nTTkzLjgyNiw3Ny44MTZjMi40NjYsMCw0LjQ2MS0yLDQuNDYxLTQuNDY3YzAtMi40NjMtMS45OTUtNC40NjEtNC40NjEtNC40NjFjLTIuNDY3LDAtNC40NjUsMS45OTgtNC40NjUsNC40NjFDODkuMzYxLDc1LjgxNiw5MS4zNTksNzcuODE2LDkzLjgyNiw3Ny44MTZ6Jy8+PHBhdGggZmlsbD0nIzA5MDkwOCcgZD0nTTkzLjgyNiw4NC44OTZjLTQuOTMyLDAtOC45MjcsMy45OS04LjkyNyw4LjkyOGMwLDQuOTMyLDMuOTk1LDguOTI4LDguOTI3LDguOTI4YzQuOTI4LDAsOC45My0zLjk5Niw4LjkzLTguOTI4QzEwMi43NTYsODguODg3LDk4Ljc1NCw4NC44OTYsOTMuODI2LDg0Ljg5NnonLz48L2c+PGc+PHBhdGggZmlsbD0nIzQ0M0QyQScgZD0nTTQ4LjQxOSw1Mi44ODVjMCwyLjQ2MywxLjk5OCw0LjQ2Myw0LjQ2Miw0LjQ2M2MyLjQ2NiwwLDQuNDY0LTIsNC40NjQtNC40NjNjMC0yLjQ2NS0xLjk5OC00LjQ2OS00LjQ2NC00LjQ2OUM1MC40MTcsNDguNDE2LDQ4LjQxOSw1MC40Miw0OC40MTksNTIuODg1eicvPjxwYXRoIGZpbGw9JyM0NDNEMkEnIGQ9J002NC40MjcsMzIuNDE0YzAsNC45MzIsMy45OTcsOC45MjYsOC45MjQsOC45MjZjNC45MzYsMCw4LjkzLTMuOTk0LDguOTMtOC45MjZjMC00LjkzNC0zLjk5NC04LjkzNC04LjkzLTguOTM0QzY4LjQyNCwyMy40OCw2NC40MjcsMjcuNDgsNjQuNDI3LDMyLjQxNHonLz48cGF0aCBmaWxsPScjNDQzRDJBJyBkPSdNNjEuODExLDMyLjQxNGMwLTQuOTM0LTMuOTk4LTguOTM0LTguOTI1LTguOTM0Yy00LjkzNCwwLTguOTMzLDQtOC45MzMsOC45MzRjMCw0LjkzMiwzLjk5OSw4LjkyNiw4LjkzMyw4LjkyNkM1Ny44MTMsNDEuMzQsNjEuODExLDM3LjM0Niw2MS44MTEsMzIuNDE0eicvPjxwYXRoIGZpbGw9JyM0NDNEMkEnIGQ9J00zMi40MTIsODQuODk2Yy00LjkzNCwwLTguOTI3LDMuOTktOC45MjcsOC45MjhjMCwyLjQzLDAuOTczLDQuNjMzLDIuNTQ5LDYuMjQybDEyLjYyMS0xMi42MjFDMzcuMDQ0LDg1Ljg2OSwzNC44NDMsODQuODk2LDMyLjQxMiw4NC44OTZ6Jy8+PHBhdGggZmlsbD0nIzQ0M0QyQScgZD0nTTg0Ljg5OSwzMi40MTRjMCwyLjQzLDAuOTc0LDQuNjI5LDIuNTQ2LDYuMjM4bDEyLjYyMi0xMi42MjFjLTEuNjEyLTEuNTc2LTMuODEzLTIuNTUxLTYuMjQxLTIuNTUxQzg4Ljg5NSwyMy40OCw4NC44OTksMjcuNDgsODQuODk5LDMyLjQxNHonLz48cGF0aCBmaWxsPScjNDQzRDJBJyBkPSdNNDguNDE5LDczLjM1YzAsMS4xOTksMC40NzksMi4yODEsMS4yNDYsMy4wODRsNi4zLTYuMjk5Yy0wLjgwMi0wLjc2OC0xLjg4NS0xLjI0Ni0zLjA4My0xLjI0NkM1MC40MTcsNjguODg5LDQ4LjQxOSw3MC44ODcsNDguNDE5LDczLjM1eicvPjxwYXRoIGZpbGw9JyM0NDNEMkEnIGQ9J00zMi40MTIsNDMuOTUzYy00LjkzNCwwLTguOTI3LDQtOC45MjcsOC45MzJzMy45OTMsOC45MjIsOC45MjcsOC45MjJjNC45MywwLDguOTMtMy45OSw4LjkzLTguOTIyUzM3LjM0Miw0My45NTMsMzIuNDEyLDQzLjk1M3onLz48cGF0aCBmaWxsPScjNDQzRDJBJyBkPSdNNjguODk1LDUyLjg4NWMwLDEuMTk1LDAuNDc3LDIuMjc3LDEuMjQxLDMuMDc2bDYuMjk5LTYuMjk3Yy0wLjgwNC0wLjc2OC0xLjg4Ni0xLjI0OC0zLjA4NC0xLjI0OEM3MC44OTEsNDguNDE2LDY4Ljg5NSw1MC40Miw2OC44OTUsNTIuODg1eicvPjxwYXRoIGZpbGw9JyM0NDNEMkEnIGQ9J00zMi40MTIsMjMuNDhjLTQuOTM0LDAtOC45MjcsNC04LjkyNyw4LjkzNGMwLDQuOTMyLDMuOTkzLDguOTI2LDguOTI3LDguOTI2YzQuOTMsMCw4LjkzLTMuOTk0LDguOTMtOC45MjZDNDEuMzQyLDI3LjQ4LDM3LjM0MiwyMy40OCwzMi40MTIsMjMuNDh6Jy8+PHBhdGggZmlsbD0nIzQ0M0QyQScgZD0nTTMyLjQxMiw2NC40MmMtNC45MzQsMC04LjkyNyw0LjAwMi04LjkyNyw4LjkzYzAsNC45MzQsMy45OTMsOC45MzQsOC45MjcsOC45MzRjNC45MywwLDguOTMtNCw4LjkzLTguOTM0QzQxLjM0Miw2OC40MjIsMzcuMzQyLDY0LjQyLDMyLjQxMiw2NC40MnonLz48L2c+PC9nPjwvc3ZnPgo=";if(a._oldIE)switch(a._widget.config.name){case"mpu":c=h,b=e;break;case"small":default:c=g,b=d}else c=i,b=f;a._currencies=["USD"],a._metrics=["high","low"],a._elements={},a._data={},a._range={},a._history=[],a._apiHistoryUrl=a._protocol+"//api.coindesk.com/tickerdata/history",a._apiCurrentUrl=a._protocol+"//api.coindesk.com/v1/bpi/currentprice.json",a._urlCoinDeskPrice="http://www.coindesk.com/price/",a._pollingDelay=6e4,a._template=['<div class="btc-box" style="font-family: Helvetica, \'Helvetia Neue\', Arial; position: relative; cursor: default; overflow:hidden; background-color: #353536; width: '+a._widget.config.width+"px; height: "+a._widget.config.height+"px; line-height: 1; border-radius: 4px; "+a._widget.config.alignment+' ">','<div class="widget-loading" id="btc-slider">','<div class="btc-box">','<div id="sparkline" style="width:'+(a._widget.config.width+10)+"px; height:"+a._widget.config.spark.height+"px; position: absolute; right: -10px; top: "+(a._widget.config.padding-5)+'px; overflow: hidden;"></div>','<div id="coindesk-logo" style="position: absolute; z-index: 2;  width: '+a._widget.config.logo.coindesk.size+"px; height: "+a._widget.config.logo.coindesk.size+"px; background-size: contain; background-repeat: no-repeat; bottom: "+a._widget.config.padding+"px; right: "+a._widget.config.padding+'px;"><a style="display:block; width: 100%; height: 100%" href="'+a._urlCoinDeskPrice+'" title="See the latest bitcoin news and prices at CoinDesk" target="_blank"></a></div>','<div style="position: absolute; left: '+a._widget.config.padding+"px; bottom: "+a._widget.config.padding+'px;">','<span class="btc-latest" title="Latest bitcoin price in USD taken from CoinDesk\'s bitcoin index" style="float: left; position: relative; z-index: 2; font-weight: bold; font-size: '+a._widget.config.text.primary+"px; height: "+a._widget.config.text.primary+'px">','<div id="btc-logo" style="float: left; margin:0 8px -4px 0; width: '+a._widget.config.logo.bitcoin.size+"px; height: "+a._widget.config.logo.bitcoin.size+'px; background-size: contain; background-repeat: no-repeat;"></div>','<span class="animated" id="btc-usd-field"></span>',"</span>",'<div style="line-height: '+2*a._widget.config.text.normal+'px; clear: left;">','<span style="color: #CCC; font-size: '+a._widget.config.text.normal+'px; display: inline-block;">High: <b><span id="btc-range-high"></span></b></span>','<span style="color: #CCC; font-size: '+a._widget.config.text.normal+'px; display: inline-block; margin-left: 6px;">Low: <b><span id="btc-range-low"></span></b></span>',"</div>",'<div style="font-size: '+a._widget.config.text.small+'px; color: #999; ">','Powered by <a href="'+a._urlCoinDeskPrice+'" title="See the latest bitcoin news and prices at CoinDesk" target="_blank" style="color: #fbc205; text-decoration: underline; cursor: pointer">CoinDesk</a>',"</div>","</div>","</div>",'<div class="btc-box" style="text-align: center; line-height: '+a._widget.config.height+'px; color: #999;">','<div class="loading">Loading</div>',"</div>","</div>","</div>",'<style type="text/css">',".btc-latest {transition: 0.2s linear color; -o-transition: 0.2s linear color; -moz-transition: 0.2s linear color; -webkit-transition: 0.2s linear color; color: #EEE;} .delta-down {color: #C3342B;} .delta-up {color: #5D8700;} .btc-path {-webkit-transition: 0.2s linear opacty; stroke: #dfdfdf; stroke-width: 1.5px; fill: none; }",".btc-box {height: "+a._widget.config.height+"px; width: "+a._widget.config.width+"px; position: relative}","#btc-slider {transition: 0.1s ease-in top; -o-transition: 0.1s ease-in top; -moz-transition: 0.1s ease-in top; -webkit-transition: 0.1s ease-in top; top: 0px; position: relative;}","#btc-slider.widget-loading {top: -"+a._widget.config.height+"px;}",".btc-box:hover .btc-path {stroke: #fbc205}",'#btc-logo {background-image: url("'+b+'");}','#coindesk-logo {background-image: url("'+c+'");}',".btc-box .overlay {fill: none; pointer-events: all;}",".btc-box .focus .tooltipBg { fill: #333; fill-opacity: 0.8;}",".btc-box .focus circle { fill: none; stroke: #FBC001; stroke-width: 2;}",".btc-box .focus text {fill: #EEE; font-weight: normal; font-size: 12px;}",".btc-box .focus line { stroke: #FBC001; stroke-dasharray: 3 3; opacity: .8;}",".animated { -webkit-animation-duration: 1s; -moz-animation-duration: 1s; -o-animation-duration: 1s; animation-duration: 1s;}","@-webkit-keyframes fadeInUp {0% {opacity: 0;-webkit-transform: translateY(20px);}100% {opacity: 1;-webkit-transform: translateY(0);}}","@-moz-keyframes fadeInUp {0% {opacity: 0;-moz-transform: translateY(20px);}100% {opacity: 1;-moz-transform: translateY(0);}}","@-o-keyframes fadeInUp {0% {opacity: 0;-o-transform: translateY(20px);}100% {opacity: 1;-o-transform: translateY(0);}}","@keyframes fadeInUp {0% {opacity: 0;transform: translateY(20px);}100% {opacity: 1;transform: translateY(0);}}",".animated.fadeInUp {-webkit-animation-name: fadeInUp;-moz-animation-name: fadeInUp;-o-animation-name: fadeInUp;animation-name: fadeInUp;}","@-webkit-keyframes fadeInDown {0% {opacity: 0;-webkit-transform: translateY(-20px);}100% {opacity: 1;-webkit-transform: translateY(0);}}","@-moz-keyframes fadeInDown {0% {opacity: 0;-moz-transform: translateY(-20px);}100% {opacity: 1;-moz-transform: translateY(0);}}","@-o-keyframes fadeInDown {0% {opacity: 0;-o-transform: translateY(-20px);}100% {opacity: 1;-o-transform: translateY(0);}}","@keyframes fadeInDown {0% {opacity: 0;transform: translateY(-20px);}100% {opacity: 1;transform: translateY(0);}}",".animated.fadeInDown {-webkit-animation-name: fadeInDown;-moz-animation-name: fadeInDown;-o-animation-name: fadeInDown;animation-name: fadeInDown;}",".loading {	text-indent: 999em; overflow: hidden; border-bottom:6px solid rgba(0, 0, 0, .4);border-left:6px solid rgba(0, 0, 0, .4);border-right:6px solid rgba(0, 0, 0, .4);border-top:6px solid rgba(254, 190, 18, .8);border-radius:100%;height:30px;width:30px;margin: 0 auto; margin-top: "+(a._widget.config.height-42)/2+'px;-webkit-animation:rot .6s infinite linear;-moz-animation:rot .6s infinite linear;-ms-animation:rot .6s infinite linear;-o-animation:rot .6s infinite linear;animation:rot .6s infinite linear;}@keyframes "rot"{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}@-moz-keyframes rot{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}@-webkit-keyframes "rot"{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}@-ms-keyframes "rot"{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}@-o-keyframes "rot"{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}@keyframes "rot"{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}@-moz-keyframes rot{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}@-webkit-keyframes "rot"{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}@-ms-keyframes "rot"{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}@-o-keyframes "rot"{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}@keyframes "rot"{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}@-moz-keyframes rot{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}@-webkit-keyframes "rot"{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}@-ms-keyframes "rot"{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}@-o-keyframes "rot"{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}@-ms-keyframes "rot"{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}} @-o-keyframes "rot"{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-o-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}',"</style>"].join("\n")};a.addScript=function(a,b){var c=document.getElementsByTagName("head")[0],d=document.createElement("script");d.type="text/javascript",d.src=a,d.onload=function(){b(a)},c.appendChild(d)},a.createCORSRequest=function(a,b){var c=new XMLHttpRequest;return"withCredentials"in c?c.open(a,b,!0):"undefined"!=typeof XDomainRequest?(c=new XDomainRequest,c.open(a,b)):c=null,c},a.removeClass=function(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")},a.addClass=function(a,b){a.classList?a.classList.add(b):a.className+=" "+b},a.getHistoryData=function(){var b=a.createCORSRequest("get",a._apiHistoryUrl);b&&(b.onload=function(){var c=JSON.parse(b.responseText);c.hasOwnProperty("d")&&a.updateHistory(c.d,!0),c.hasOwnProperty("range")&&(a._range=c.range,a.updateWidget())},b.onerror=function(){console.log("There was a problem loading data from the CoinDesk History API: "+a._apiHistoryUrl)},b.send())},a.getCurrentData=function(){var b=a.createCORSRequest("get",a._apiCurrentUrl);b&&(b.onload=function(){var c=JSON.parse(b.responseText);a._data=c.bpi,a.receiveCoinDeskData(a._data)},b.onerror=function(){console.log("There was a problem loading data from the CoinDesk Price API:"+a._apiCurrentUrl)},b.send()),setTimeout(a.getCurrentData,a._pollingDelay)},a.receiveCoinDeskData=function(b){var c=a._history.slice(-1)[0];a.updateRange(parseFloat(b.USD.rate_float)),a.updateWidget(),a.updateColor(c,parseFloat(b.USD.rate_float)),a.updateHistory(parseFloat(b.USD.rate_float)),a._data.USD&&a.removeClass(a._elements.slider,"widget-loading")},a.updateRange=function(b){"undefined"!=typeof b&&((b<a._range.low||"undefined"==typeof a._range.low)&&(a._range.low=b),(b>a._range.high||"undefined"==typeof a._range.high)&&(a._range.high=b))},a.updateWidget=function(){for(var b=0;b<a._currencies.length;b++){var c=a._currencies[b],d=a._data[c]?a._data[c].symbol:"",e=a._data[c]?a.formatFloat(a._data[c].rate_float):"";a._elements[c].innerHTML=d+e}for(var f=0;f<a._metrics.length;f++){var g=a._metrics[f],h=a._range[g]?a.formatFloat(a._range[g]):"";a._elements[g].innerHTML="$"+h}},a.createWidget=function(){a._widget.innerHTML=a._template,"right"===a._widget.alignment&&(a._widget.style.overflow="hidden"),a._elements.USD=document.getElementById("btc-usd-field"),a._elements.high=document.getElementById("btc-range-high"),a._elements.low=document.getElementById("btc-range-low"),a._elements.slider=document.getElementById("btc-slider"),a._elements.primary=a._elements.USD},a.updateHistory=function(b,c){c?a._history=b:a._history.push(b),a._oldIE||a.updateSparkline()},a.formatFloat=function(a,b){b="undefined"!=typeof b?b:2;var c=parseFloat(a);return c=c.toFixed(b)},a.getAlignment=function(b){switch(b){case"center":a._widget.config.alignment="margin: 0 auto";break;case"right":a._widget.config.alignment="float: right";break;case"left":default:a._widget.config.alignment=""}},a.getDimensions=function(b){switch(b){case"mpu":a._widget.config={name:"mpu",height:250,width:300,padding:15,spark:{height:135,width:300,tooltip:!0,tooltipBg:!1},logo:{bitcoin:{size:40},coindesk:{size:50}},text:{primary:40,normal:14,small:11}};break;default:a._widget.config={name:"small",height:130,width:210,padding:8,spark:{height:50,width:210,tooltip:!0,tooltipBg:!0},logo:{bitcoin:{size:30},coindesk:{size:30}},text:{primary:30,normal:10,small:9}}}},a.updateColor=function(b,c){b>c?(a.addClass(a._elements.primary,"delta-down"),a.addClass(a._elements.primary,"fadeInDown")):c>b?(a.addClass(a._elements.primary,"delta-up"),a.addClass(a._elements.primary,"fadeInUp")):a.resetColor(),setTimeout(function(){a.resetColor()},1e3)},a.resetColor=function(){a.removeClass(a._elements.primary,"fadeInUp"),a.removeClass(a._elements.primary,"fadeInDown"),a.removeClass(a._elements.primary,"delta-up"),a.removeClass(a._elements.primary,"delta-down")},a.updateSparkline=function(){var b,c,d,e="#sparkline",f=a._widget.config.spark.width+20,g=a._widget.config.spark.height,h="cardinal",i=1e3;if(a._graph||(a._graph=d3.select(e).append("svg:svg").attr("width","100%").attr("height","100%")),a._history.length>60&&a._history.shift(),b=d3.scale.linear().domain([0,60]).range([-2,f]),c=d3.scale.linear().domain([d3.max(a._history)+1,d3.min(a._history)-.3]).range([0,g]),d=d3.svg.line().x(function(a,c){return b(c)}).y(function(a){return c(a)}).interpolate(h),a._graph.selectAll(".btc-path").remove(),a._graph.selectAll(".focus").remove(),a._graph.selectAll(".overlay").remove(),a._graph.append("svg:path").attr("d",d(a._history)).attr("class","line"),a._graph.selectAll("path").data([a._history]).attr("transform","translate("+b(1)+")").attr("d",d).attr("class","btc-path").transition().ease("linear").duration(i).attr("transform","translate("+b(0)+")"),a._widget.config.spark.tooltip){var j=function(a,b){return"$"+a.toFixed(2)+" ("+(57-b)+"mins ago)"},k=function(){var d=b.invert(d3.mouse(this)[0]),e=Math.floor(d),f=a._history[e+1];l.select("circle").attr("transform","translate("+b(d)+","+c(f)+")"),l.select("text").text(j(f,e)),l.select("line").attr("transform","translate("+b(d)+", 0)").attr("y1",g)},l=a._graph.append("g").attr("class","focus").style("display","none");l.append("circle").attr("r",6),l.append("line").attr(),a._widget.config.spark.tooltipBg&&l.append("rect").attr("class","tooltipBg").attr("transform","translate(-10,0)").attr("width",153).attr("height",22).attr("rx",4).attr("ry",4),l.append("text").attr("transform","translate(12,15)"),
    a._graph.append("rect").attr("class","overlay").attr("width",f).attr("height",g).on("mouseover",function(){l.style("display",null)}).on("mouseout",function(){l.style("display","none")}).on("mousemove",k)}},a._oldIE?a.initialize():a.addScript(a._tickerUrl+"/d3.min.js",a.initialize)},_widget=new CoinDeskWidget;