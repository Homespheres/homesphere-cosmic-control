
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Cpu, Code, PlayCircle, PauseCircle, Trash2, Plus, Download } from 'lucide-react';

const AutomationLab = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-orbitron text-gradient-teal">Automation Lab</h1>
            <p className="text-sm sm:text-base text-white">Create and manage your smart home automations</p>
          </div>
          <Button className="w-full sm:w-auto bg-cosmic-teal hover:bg-cosmic-teal/80 text-black font-medium">
            <Plus size={18} className="mr-2 text-black" /> New Automation
          </Button>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="w-full sm:w-auto bg-cosmic-blue/30 border border-cosmic-teal/20 overflow-x-auto flex-nowrap">
            <TabsTrigger value="active" className="flex-1 sm:flex-none text-white text-xs sm:text-sm">Active Automations</TabsTrigger>
            <TabsTrigger value="templates" className="flex-1 sm:flex-none text-white text-xs sm:text-sm">Templates</TabsTrigger>
            <TabsTrigger value="scheduler" className="flex-1 sm:flex-none text-white text-xs sm:text-sm">Scheduler</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { 
                  name: 'Morning Routine', 
                  description: 'Activates lights, adjusts temperature, and plays news at 6:30 AM',
                  status: 'active',
                  triggers: ['Time: 6:30 AM', 'Weekdays']
                },
                { 
                  name: 'Away Mode', 
                  description: 'Simulates presence when no one is home by randomizing lights and media',
                  status: 'active',
                  triggers: ['Location: All residents away', 'Security system armed']
                },
                { 
                  name: 'Movie Night', 
                  description: 'Dims lights, closes blinds, and configures home theater',
                  status: 'paused',
                  triggers: ['Scene activation', 'Voice command']
                },
                { 
                  name: 'Energy Saver', 
                  description: 'Adjusts devices to minimize power consumption during peak hours',
                  status: 'active',
                  triggers: ['Time: 4:00 PM - 8:00 PM', 'Energy price threshold']
                },
                { 
                  name: 'Welcome Home', 
                  description: 'Detects arrival and adjusts home environment based on who arrived',
                  status: 'active',
                  triggers: ['Door lock', 'Motion sensor', 'Location']
                }
              ].map((automation, index) => (
                <Card key={index} className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cosmic-teal via-cosmic-teal/50 to-transparent"></div>
                  <CardHeader className="px-4 sm:px-6">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <CardTitle className="text-lg sm:text-xl text-white">{automation.name}</CardTitle>
                      <Badge className={automation.status === 'active' ? "bg-cosmic-teal text-white shrink-0" : "bg-cosmic-amber/40 text-white shrink-0"}>
                        {automation.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-xs sm:text-sm text-white">{automation.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6">
                    <div className="mb-4">
                      <h4 className="text-xs sm:text-sm text-white mb-2">Triggers:</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {automation.triggers.map((trigger, i) => (
                          <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded-full text-white">{trigger}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-white flex-wrap gap-2">
                      <div className="flex items-center">
                        <Code size={14} className="mr-1 text-white" />
                        <span>Complexity: Medium</span>
                      </div>
                      <div>Last run: 2h ago</div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-white/10 pt-4 opacity-70 group-hover:opacity-100 transition-opacity px-4 sm:px-6 flex-wrap gap-2">
                    {automation.status === 'active' ? (
                      <Button variant="ghost" size="sm" className="text-white">
                        <PauseCircle size={16} className="mr-1 text-white" /> Pause
                      </Button>
                    ) : (
                      <Button variant="ghost" size="sm" className="text-white">
                        <PlayCircle size={16} className="mr-1 text-white" /> Resume
                      </Button>
                    )}
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-white">
                        <Download size={16} className="text-white" /> 
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-900/20">
                        <Trash2 size={16} className="text-red-400" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="templates">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <Card className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md hover:border-cosmic-teal/40 transition-colors cursor-pointer">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-lg sm:text-xl text-white">Security Monitoring</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-white">Automated security protocols for monitoring your home</CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <p className="text-xs sm:text-sm text-white">Integrates motion sensors, cameras, and alert systems to provide comprehensive security coverage.</p>
                </CardContent>
                <CardFooter className="px-4 sm:px-6">
                  <Button className="w-full bg-cosmic-teal/20 hover:bg-cosmic-teal/40 text-cosmic-teal border border-cosmic-teal/30">
                    Use Template
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md hover:border-cosmic-teal/40 transition-colors cursor-pointer">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-lg sm:text-xl text-white">Sleep Optimization</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-white">Create the perfect sleep environment automatically</CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <p className="text-xs sm:text-sm text-white">Gradually dims lights, adjusts temperature, plays white noise, and activates do-not-disturb modes.</p>
                </CardContent>
                <CardFooter className="px-4 sm:px-6">
                  <Button className="w-full bg-cosmic-teal/20 hover:bg-cosmic-teal/40 text-cosmic-teal border border-cosmic-teal/30">
                    Use Template
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md hover:border-cosmic-teal/40 transition-colors cursor-pointer">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-lg sm:text-xl text-white">Vacation Mode</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-white">Simulate presence while you're away</CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <p className="text-xs sm:text-sm text-white">Creates randomized patterns for lights, media, and blinds while monitoring security systems.</p>
                </CardContent>
                <CardFooter className="px-4 sm:px-6">
                  <Button className="w-full bg-cosmic-teal/20 hover:bg-cosmic-teal/40 text-cosmic-teal border border-cosmic-teal/30">
                    Use Template
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="scheduler" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md">
                  <CardHeader className="px-4 sm:px-6">
                    <CardTitle className="text-lg sm:text-xl text-white">Weekly Schedule</CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-white">Automation activation patterns</CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6">
                    <div className="h-[300px] flex items-center justify-center">
                      <p className="text-white text-center text-sm">Interactive scheduler visualization would appear here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md">
                  <CardHeader className="px-4 sm:px-6">
                    <CardTitle className="text-lg sm:text-xl text-white">Quick Schedule</CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-white">Set up automation times</CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm text-white">Select Automation</label>
                        <div className="p-2 border border-white/20 rounded-md text-white text-sm">Morning Routine</div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm text-white">Schedule Type</label>
                        <div className="flex flex-wrap gap-2">
                          <Button size="sm" className="bg-cosmic-teal text-black text-xs sm:text-sm">Daily</Button>
                          <Button size="sm" variant="outline" className="text-black text-xs sm:text-sm">Weekly</Button>
                          <Button size="sm" variant="outline" className="text-black text-xs sm:text-sm">Custom</Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm text-white">Time</label>
                        <div className="p-2 border border-white/20 rounded-md text-white text-sm">06:30 AM</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="px-4 sm:px-6">
                    <Button className="w-full bg-cosmic-teal hover:bg-cosmic-teal/80 text-black">Apply Schedule</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AutomationLab;
